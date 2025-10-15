// 定义常量变量
const cities = ['beijing', 'shanghai', 'guangzhou', 'shenzhen', 'chengdu', 'wuhan', 'xian'];
const apiKey = 'SWJEEWD_M17tT3zGk';
// 要修改 使用let
let weatherData = [];

// 获取页面元素
const container = document.getElementById('weather-cards');
const sortUpBtn = document.getElementById('up_btn');
const sortDownBtn = document.getElementById('down_btn');

// 发送请求
function fetchWeatherData() {
    // step1：每个城市创建一个API请求。
    // 用map方法遍历cities数组 每个城市都返回一个axios请求
    const requests = cities.map(city => {
        // 构造天气url
        const apiUrl = `https://api.seniverse.com/v3/weather/now.json?key=${apiKey}&location=${city}`;
        return axios({
            url: apiUrl,
            method: 'get'
            // 每个城市都返回一个promise对象
        });
    });

    // requests：数组，包含了7个Promise对象，即待处理的请求
    console.log("创建了7个请求:", requests);

    // step2：使用Promise.all来等待所有请求都完成。
    Promise.all(requests)
        .then(responses => {
            // responses：数组，包含了7个请求的结果，即待处理的请求
            console.log("所有请求成功，收到的原始数据:", responses);
            // 查看结果格式

            // step3：处理数据
            // 将结果存入weatherData变量
            weatherData = responses.map(response => {
                const data = response.data.results[0];
                return {
                    name: data.location.name,
                    // 字符串转换为整数
                    temperature: parseInt(data.now.temperature),
                    weather: data.now.text,
                };
            });
            // weatherdata: 数组,包含了7组天气对象，和return返回的格式一样
            
            // step4：渲染数据
            renderWeatherCards(weatherData);
        })
        .catch(error => {
            console.error('获取天气数据失败', error);
            container.innerHTML = '<p class="loading">获取天气数据失败</p>';

            if (error.response) {
                alert(`请求失败: ${error}`);
            }
        });
}


// 页面渲染
function renderWeatherCards(data) {
    container.innerHTML = '';
    // 只需要遍历数组，对每个元素执行一个操作 - 使用forEach
    // 对于每一个天气渲染一个card 并且放入container
    data.forEach(cityWeather => {
        const card = document.createElement('div');
        card.className = 'weather-card';
        card.innerHTML = `
            <h3>${cityWeather.name}</h3>
            <p class="temperature">${cityWeather.temperature}°C</p>
            <p class="weather">${cityWeather.weather}</p>
        `;
        container.appendChild(card);
    });
}



// 排序
function sortData(direction) {
    weatherData.sort((a, b) => {
        // sort:a-b(负数)升 b-a(正数)降
        let difference;

        // 升序
        if (direction === 'up') {
            difference = a.temperature - b.temperature;
        } else {
            //降序
            difference = b.temperature - a.temperature;
        }


        // （对于sort里的ab）温度相同 还需额外处理
        if (difference === 0) {
            const weatherRankA = getWeatherRank(a.weather);
            const weatherRankB = getWeatherRank(b.weather);
            // 天气等级为升序
            return weatherRankA - weatherRankB;
        }

        // 返回插值
        return difference;
    });
    
    // 再次更新渲染卡片
    renderWeatherCards(weatherData);
}


//  这个设定权重值来方便使用sort函数的方法很重要！！
//  非数值类排序要使用sort时 可以设定权重值
//  规则：晴(0) 多云(1) 阴(2) 雨(3)
function getWeatherRank(weatherText) {
    // 包含雨
    if (weatherText.includes('雨')) return 3;
    if (weatherText === '阴') return 2;
    if (weatherText === '多云') return 1;
    if (weatherText === '晴') return 0;
    return 4; // 其他天气情况
}



sortUpBtn.addEventListener('click', () => {
    sortData('up');
});
sortDownBtn.addEventListener('click', () => {
    sortData('down');
});


// 当页面加载完成后，立即获取天气数据
document.addEventListener('DOMContentLoaded', fetchWeatherData);
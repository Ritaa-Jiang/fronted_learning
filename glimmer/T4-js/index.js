function orderStudentGrade(students) {
    // Todo: 你只需要补全该函数
    // 就是把学生对象分组 + 按照总分排序
    // result是一个对象，键是班级编号(1/2/3)，值是该班级的学生数组
// 每个学生数组包含学生对象 且已从高到低排序

    const classStudents = {};

    students.forEach((student) => {
      const totalScore = student.classPerformance + student.defense + student.finalExam;
      // 添加总分属性 方便后续比较
      student.totalScore = totalScore; 

      // 如果还没有该班级对应的键值对，则创建班级号 + 空班级数组
      // 注意用[]这种写法的时候 打印号和不打引号(当成字符串看/直接当成变量看)
      // 这里因为键的变量写法比较复杂 用[]
      if (!classStudents[student.class]) {
        classStudents[student.class] = [];
      }

      // 将学生对象添加到对应班级的数组中
      classStudents[student.class].push(student);
    })
    
    // 降序排序 现在只是分好了类而已
    // 遍历所有键
    for (const cls in classStudents) {
      // js中的数组重新排序可用的函数只能用sort方法
      // sort方法的参数是一个(比较)函数（用了箭头函数 是匿名函数）
      // （参数） =》 {函数体}
      // 比较函数：参数为数组中的参数a,b    返回b.totalScore - a.totalScore的值
      // 如果返回值>0 则认为第一个元素大于第二个元素 sort排序将使a排在b后
      // sort() 方法会遍历数组中的元素,两两比较,比较函数会被反复调用
      classStudents[cls].sort((a, b) => b.totalScore - a.totalScore);
      
      
      // 若要反向排序？
      // arr.sort((a, b) => a.score - b.score);
      // 返回值大于0就交换顺序
    }

    // 返回对象
    return classStudents;
}





const output = document.getElementById("output-container");
//这里是模拟从数据库中接收学生的数据结构
const students = [
        {
          name: "雄子涵",
          class: 1,
          classPerformance: 90,
          defense: 78,
          finalExam: 60,
        },
        {
          name: "羊俞杰",
          class: 1,
          classPerformance: 90,
          defense: 77,
          finalExam: 70,
        },
        {
          name: "唐小鱼",
          class: 1,
          classPerformance: 140,
          defense: 90,
          finalExam: 0,
        },
        {
          name: "灭霸",
          class: 3,
          classPerformance: 14,
          defense: 90,
          finalExam: 12,
        },
        {
          name: "张喆",
          class: 3,
          classPerformance: 11,
          defense: 60,
          finalExam: 12,
        },
        {
          name: "依林",
          class: 1,
          classPerformance: 100,
          defense: 60,
          finalExam: 82,
        },
        {
          name: "雨豪",
          class: 1,
          classPerformance: 88,
          defense: 70,
          finalExam: 100,
        },
        {
          name: "苏悠玲",
          class: 2,
          classPerformance: 100,
          defense: 100,
          finalExam: 100,
        },
        {
          name: "童莫玲",
          class: 2,
          classPerformance: 90,
          defense: 90,
          finalExam: 78,
        },
        {
          name: "李希",
          class: 2,
          classPerformance: 100,
          defense: 90,
          finalExam: 77,
        },
        {
          name: "擎苍",
          class: 3,
          classPerformance: 100,
          defense: 98,
          finalExam: 87,
        },
        {
          name: "苗孟",
          class: 2,
          classPerformance: 100,
          defense: 99,
          finalExam: 77,
        },
        {
          name: "皓轩",
          class: 3,
          classPerformance: 100,
          defense: 87,
          finalExam: 78,
        },
        {
          name: "风川祥",
          class: 2,
          classPerformance: 100,
          defense: 76,
          finalExam: 86,
        },
        {
          name: "潇萧然",
          class: 3,
          classPerformance: 99,
          defense: 67,
          finalExam: 84,
        },
        {
          name: "智宸",
          class: 1,
          classPerformance: 80,
          defense: 54,
          finalExam: 100,
        },
        {
          name: "风华",
          class: 3,
          classPerformance: 10,
          defense: 90,
          finalExam: 40,
        },
        {
          name: "紫昆",
          class: 1,
          classPerformance: 90,
          defense: 68,
          finalExam: 75,
        },
        {
          name: "齐涵雅",
          class: 2,
          classPerformance: 100,
          defense: 100,
          finalExam: 100,
        },
        {
          name: "初尹伟",
          class: 3,
          classPerformance: 100,
          defense: 90,
          finalExam: 100,
        },
];

// 将students传入函数，得到按班级和总分排序后的结果

// result是一个对象，键是班级编号(1/2/3)，值是该班级的学生数组
// 每个学生数组包含学生对象 且已从高到低排序

const result = orderStudentGrade(students);
const style = document.createElement('style');
//这里是给表格添加样式。正式开发不推荐这么写，略过
style.textContent = `
  .cls {
    margin-bottom: 30px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    overflow: hidden;
  }
  
  .cls-header {
    background: #3498db;
    color: white;
    padding: 12px 15px;
    font-size: 1.2em;
    font-weight: bold;
  }
  
  .score-table {
    width: 100%;
    border-collapse: collapse;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  
  .score-table th {
    background-color: #2c3e50;
    color: white;
    padding: 12px 10px;
    text-align: center;
  }
  
  .score-table td {
    padding: 10px;
    text-align: center;
    border-bottom: 1px solid #eee;
  }
  
  .score-table tr:nth-child(even) {
    background-color: #f8f9fa;
  }
  
  .score-table tr:hover {
    background-color: #e9f7fe;
    transition: background-color 0.3s;
  }
  
  .score-table td:first-child {
    font-weight: 500;
  }
  
  .score-table td:last-child {
    font-weight: bold;
    color: #2c3e50;
  }
`;
document.head.appendChild(style);

//试着把这个构建表格的过程读明白！思考一下orderStudentGrade函数应该返回什么内容？


// result变量是对象
// 用keys函数获取result的所有键 返回由对象组成的数组
// 由clsHeader.innerText = `第${cls}小组`;知，键为班级编号，eg.1,2,3…
// 然后使用forEach函数遍历这个由键组成的数组
Object.keys(result).forEach((cls) => {
    // 创建一个总的班级容器
    const clsContainer = document.createElement("div");
    clsContainer.className = "cls"; //类名
    
    // 创建班级标题
    const clsHeader = document.createElement("div");
    clsHeader.className = "cls-header";
    // 设置标题文本内容
    clsHeader.innerText = `第${cls}小组`;
    clsContainer.appendChild(clsHeader);

    // 创建table元素来展示学生成绩
    const table = document.createElement("table");
    table.border = 1;
    table.align = "center";
    table.width = "100%";

    // 创建表头行
    const header = document.createElement("tr");

    // 创建并添加表头单元格 用于姓名
    const th1 = document.createElement("th");
    th1.innerText = "姓名";
    // 单元格添加到表头行
    header.appendChild(th1);

    // 创建并添加表头单元格 用于课堂表现
    const th2 = document.createElement("th");
    th2.innerText = "课堂表现";
    header.appendChild(th2);

    // 同理
    const th3 = document.createElement("th");
    th3.innerText = "答辩表现";
    header.appendChild(th3);

    const th4 = document.createElement("th");
    th4.innerText = "期末成绩";
    header.appendChild(th4);

    const th5 = document.createElement("th");
    th5.innerText = "总分";
    header.appendChild(th5);

    // 表头行加入table
    table.appendChild(header);

    // 通过班级键值，读取得到当前班级的学生数组，数组中元素为学生对象
    const students = result[cls];

    // 遍历当前班级的学生数组
    students.forEach((student) => {
        // 为每个学生创建一行
        const tr = document.createElement("tr");
        // 创建并添加姓名单元格
        const td1 = document.createElement("td");
        // 学生对象的name属性 
        td1.innerText = student.name;
        // 将单元格添加到当前行
        tr.appendChild(td1);

        const td2 = document.createElement("td");
        td2.innerText = student.defense;
        tr.appendChild(td2);

        const td3 = document.createElement("td");
        td3.innerText = student.classPerformance;
        tr.appendChild(td3);

        const td4 = document.createElement("td");
        td4.innerText = student.finalExam;
        tr.appendChild(td4);

        const td5 = document.createElement("td");
        td5.innerText =
            student.classPerformance +
            student.defense +
            student.finalExam;
        tr.appendChild(td5);

        // 将当前学生行添加到表格
        table.appendChild(tr);
    });

    // 将填充好所有学生数据的表格(table)添加到班级总容器(clscontainer)中
    clsContainer.appendChild(table);
    // 最后将班级容器添加到输出容器中 呈现在网页中
    output.appendChild(clsContainer);
});

// 最终返回的数据结构
/*
{
  "1": [
    { "name": "学生A", "totalScore": 258, ... },
    { "name": "学生B", "totalScore": 242, ... }
  ],
  "2": [
    { "name": "学生C", "totalScore": 300, ... },
    { "name": "学生D", "totalScore": 276, ... }
  ],
  "3": [
    ...
  ]
}
*/

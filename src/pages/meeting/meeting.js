loader.define(function(){
  
        // 显示时间
    $("#show5").on("click", function(argument) {

        // 弹出的时候,也不要显示对应的时分秒
        uiPickerdate.formatValue("hh:mm:ss");
        // cols 在初始化的时候设定, 不使用调用方法的方式
        // uiPickerdate.cols({
        //     year: "none",
        //     month: "none",
        //     date: "none",
        // })

    })

        // 自定义取值示例,分钟数大于60的索引不能
        var arrs = ['07:00-07:30', '07:30-08:00', '08:00-08:30', '08:30-09:00', '09:00-09:30', '09:30-10:00', '10:00-10:30'];
        var input2 = $("#datepicker_input2");
        var uiPickerdate2 = bui.pickerdate({
            handle: "#datepicker_input2",
            // input 显示的日期格式
            formatValue: "mm",
            cols: {
                year: "none",
                month: "none",
                date: "none",
                hour: "none",
                minute: {
                    values: [0,1,2,3,4,5],
                    displayValues: arrs
                },
                second: 'none'
            },
            onChange: function(value) {
                var index = parseInt(value);
                var val = arrs[index];
                input2.val(val);
            },
            callback: function(e) {
                console.log(e.target)
                console.log(this.value())
            },
            // 如果不需要按钮,设置为空
            buttons: null
        });
})

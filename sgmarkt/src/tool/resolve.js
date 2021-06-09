class Resolve {
    date = {
        // 时间戳转日期
        format (date, pattern) {
            if (date == undefined) {
                date = new Date();
            }

            if (pattern == undefined) {
                pattern = "yyyy-MM-dd hh:mm:ss";
            }
            var o = {
                    "M+": new Date(date).getMonth() + 1,
                    "d+": new Date(date).getDate(),
                    "h+": new Date(date).getHours(),
                    "m+": new Date(date).getMinutes(),
                    "s+": new Date(date).getSeconds(),
                    "q+": Math.floor((new Date(date).getMonth() + 3) / 3),
                    "S":  new Date(date).getMilliseconds()
                };
            if (/(y+)/.test(pattern)) {
                pattern = pattern.replace(RegExp.$1, (new Date(date).getFullYear() + "").substr(4 - RegExp.$1.length));
            }

            for (var k in o) {
                if (new RegExp("(" + k + ")").test(pattern)) {
                    pattern = pattern.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
                }
            }

            return {
                pattern: pattern,
                date: pattern.split(' ')[0],
                time: pattern.split(' ')[1]
            };
        },

        // 相差几天
        computation(sDate1, sDate2){   //sDate1和sDate2是2008-12-13格式
            var aDate, oDate1, oDate2, iDays;
            aDate = sDate1.split("-");
            oDate1 = new Date(aDate[0] + '-' + aDate[1] + '-' + aDate[2]); //转换为12-13-2008格式
            aDate = sDate2.split("-");
            oDate2 = new Date(aDate[0] + '-' + aDate[1] + '-' + aDate[2]);
            iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 /24);  //把相差的毫秒数转换为天数
            return iDays
        },

        //两个日期之差 生成日期
        generateDateArr (dateArr) {
            let arrStart = [dateArr[0]];
            let startDate = new Date(dateArr[0]);
            let endDate = new Date(dateArr[1]);

            for(let i = 0; i < this.computation(dateArr[0], dateArr[1]); i++) {
                arrStart.push(this.format(startDate.setDate(startDate.getDate() + 1), 'yyyy-MM-dd'));
            }

            return arrStart;
        },

        // 转时间戳
        timestamp(date) {
            return {
                millisecond: new Date(date).getTime(),
                second: Date.parse(new Date(date))
            }
        }
    }

    arr = {
        // 获取最大
        getMax(arr) {
            let max = arr[0];
            arr.forEach (function(ele,index,arr){
                if(ele > max) {
                    max = ele;
                }
            })
            return max;
        },

        // 获取最小
        getMin(arr) {
            let min = arr[0];
            arr.forEach(function(ele, index,arr) {
                if(ele < min) {
                    min = ele;
                }
            })
            return min;
        },

        // copy
        copy(arr) {
            let arrCopy = [];
            for(let i = 0; i < arr.length; i++) {
                arrCopy.push(arr[i]);
            }

            return arrCopy;
        }
    }

    gap = {
        phoneAdd(phone) {
            //添加空格
            let regPhoneNum = phone.replace(/(\d{3})(\d{4})/, "$1 $2 ");
            return regPhoneNum;
        },
        deleteAll(val) {
            return val.replace(/\s+/g,"")
        }
}

    // 校验
    is = {
        mobile(phone) {
            return !(/^1[3456789]\d{9}$/.test(phone))
        },
        cardNo(card) {
            const  pattern = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
            return pattern.test(card);
        },
        email(email) {
            const pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

            return pattern.test(email);
        },
        URL(str_url){
            const reg=/(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/;
            return reg.test(str_url);
        }
    }

    //数字分割
    formatNum(num, digits, symbol) {

        const numStringSplit = num.toString().split('.');
        const num0 = numStringSplit[0];
        let numNew = [];

        if(num0.length > digits) {
           if(num0.length % digits == 0) {
                for(let i = num0.length-1; i>=0; i--) {
                    if( i % digits == 0) {
                        numNew.splice(0, 0, num0.slice(i, i+digits));
                    }
                }
           }  else {
                const arrSub = num0.slice(num0.length % digits);

                for(let i = arrSub.length-1; i>=0; i--) {
                    if( i % digits == 0) {
                        numNew.splice(0, 0, arrSub.slice(i, i+digits));
                    }
                }
                numNew.splice(0, 0, num0.slice(0, num0.length % digits));
           }

        } else {
            return num.toString();
        }

        if( numStringSplit.length > 1) {
            // 有小数点
            return numNew.join(symbol) + '.'  + numStringSplit[1];

        } else {
            // 没有小数点
            return numNew.join(symbol);
        }
    }

    urlIntercept = (str) => {
        const urlStr = window.location.href;

        if(urlStr.split(str + '=').length == 1) {
            return false;
        } else {
            const intercept = urlStr.split(str + '=')[1].split('&')[0];
            return intercept;
        }
    }

    // url 确码
    decoding = {
        decodeURIComponent (str) {
            return decodeURIComponent(str)
        }
    }

    // 字符串
    string = {
        // 第一个字大写
        firstUpperCase(str) {
            return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
        }
    }

    // 对像解析 url
    parseParam (url) {
        return Object.keys(url).map(function (key) {
            // body...
            return encodeURIComponent(key) + "=" + encodeURIComponent(url[key]);
        }).join("&");
    }
}
const resolve = new Resolve();
export default resolve;


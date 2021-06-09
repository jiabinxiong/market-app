const baseToll = {
    phoneReg: (phone) => {
        if((/^1[3|4|5|7|8]\d{9}$/.test(phone))){
            return true;
        } else {
            return false;
        }
    },
    phoneAddGap: (phone) => {
        //添加空格
        let regPhoneNum = phone.replace(/(\d{3})(\d{4})/, "$1 $2 ");
        return regPhoneNum;
    }
}



export default baseToll;

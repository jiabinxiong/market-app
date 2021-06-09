import React from "react";
import { View, Text } from "react-native";

const marktInfoStyle = {
    lineHeight: {
        lineHeight: 20
    },
    marginTB: {
        marginTob: 10,
        marginBottom: 10
    }
};

export default class MarktInfo extends React.Component {
    render() {
        return (
            <View  >
                <View>
                    <View >
                        <Text>交通</Text>
                    </View>
                    <View>
                        <View>
                            <View style={ marktInfoStyle.marginTB }>
                                <Text  style={ marktInfoStyle.lineHeight }>公交: 333,222,1111,44,564,65</Text>                                                           
                                <Text style={ marktInfoStyle.lineHeight }>地铁:</Text>
                                <Text style={ marktInfoStyle.lineHeight }>乘坐地铁1号线在“天安门东”站下车，步行约900米，即可从午门进入故宫。</Text>                            
                                <Text>tips:</Text>
                                <Text style={ marktInfoStyle.lineHeight }>学生票包含，大中小学生，除去成人教育、研究生。</Text>
                                <Text style={ marktInfoStyle.lineHeight }>故宫所有人需凭身份证入园。</Text>
                                <Text style={ marktInfoStyle.lineHeight }>故宫门票全部在官网提前十天预售，现场已不设购票窗口，但可微信支付入馆，每天入馆人数与网络售票共享。</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View >
                    <View  style={ marktInfoStyle.marginTB }>
                        <Text>开放时间</Text>
                    </View>
                    <View >
                        <View>                            
                            <Text  style={ marktInfoStyle.lineHeight }>08:30-16:30；停止售票时间:15:30；停止入场时间:15:40 (11月01日-次年03月31日 周二-周日)</Text>                            
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
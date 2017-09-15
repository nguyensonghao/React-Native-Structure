import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import HTMLView from 'react-native-htmlview';
import AutoHeightImage from 'react-native-auto-height-image';

import GlobalStyle from '../../../styles/global';
import Style from './style';
import CommentBox from '../components/commentBox';
import ActionsDetail from '../components/actionDetail';

class DetailArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: "",
            showComment: false,
            fontSize: 16
        }
    }

    componentDidMount() {
        this.setState({
            content: '<div class="entry-content g1-typography-xl" itemprop="articleBody"><p>Thành phần của Vacxin cho chó bao gồm mầm bệnh hay chỉ là một phần cấu trúc của mầm bệnh đã bị làm yếu đi và không còn khả năng gây ra bệnh. Khi tiêm Vacxin vào cơ thể thì hể thống miễn dịch sẽ được kích thích tạo ra các kháng thể để chuẩn bị cho việc chống lại sự xâm nhiễm của mầm bệnh sau này.</p><p>Vì vậy việc tiêm Vacxin là điều quan trọng trong việc xây dựng một bộ giáp để phòng ngừa các bệnh truyền nhiễm nguy hiểm cho chó cưng của bạn.</p><h2>Bệnh care (bệnh sài sốt)</h2><p>Nguyên nhân gây ra bệnh là do virut Paramyxovirus ,virut có thể lây truyền trực tiếp thông qua việc tiếp xúc với các chất bài tiết của cơ thể như nước mũi, rỉ mắt, phân, nước tiểu. Hay các con đường gián tiếp trong môi trường sống như các dụng cụ nuôi nhốt, bát thức ăn, đồ chơi, đồ dùng bị nhiễm mầm bệnh.</p><p>Khi chó bị nhiễm bênh thì sẽ có các triệu chứng như ủ rũ, chán ăn, nhiệt độ cao, mắt đỏ, có nước mũi, rỉ mắt màu xanh, tiêu chảy, yếu sức. Hay có các triệu chứng về hệ thần kinh như co giật hay bại liệt.</p><p>Khi chó có triệu chứng về hệ thần kinh thí sẽ nguy hiểm đến tính mạng. Bệnh này còn có tên gọi khác là “Hard pad disease”. Vì bệnh làm cho đệm bàn chân ,mũi dầy lên và bong tróc.Vì bệnh là do virut gây ra nên sẽ không có thuốc đặc trị mà sẽ điều trị theo hướng hỗ trợ như sử dụng thuốc kích thích hệ thống miền dịch. Thuốc kháng sinh để ngăn ngừa các bệnh nhiễm trùng kế phát và điều trị theo các triệu chứng mà chó mắc phải.</p><h2>Bệnh parvo (viêm ruột truyền nhiễm)</h2><p>Nguyên nhân bệnh là do một trong hai virut Parvovirus hay Coronavirus gây ra hoặc là do cả hai. Bệnh được lây truyền thông qua phân, thức ăn, nước uống hay vật dụng của chó nhiễm bệnh.</p><p>Khi chó bị nhiễm bệnh thường có các triệu chứng như đi phân lỏng có lẫn máu mùi hôi tanh. Chó sẽ bị mất nước rất nhanh và làm cho chó có triệu chứng co giật và có thể nguy hiểm đến tính mạng. Việc điều trị sẽ điều trị theo triệu chứng,truyền dịch và thuốc kháng sinh để ngăn ngừa bênh nhiễm trùng kế phát.</p><h2>Bệnh dại</h2><p>Nguyên nhân bệnh la do virut Rhabdovirus, virut lây truyền từ nước dãi của chó bị bệnh thông qua các vết thương hay bị cắn. Bệnh dại là một bệnh truyền nhiễm nguy hiểm từ động vật sang người và nguy hiểm đến tính mạng. Khi chó bị nhiễm bệnh thường có các triệu chứng về hệ thần kinh và chia làm 2 giai đoạn, giai đoạn 1 hung dữ ,giai đoạn 2 bại liệt.</p><p>Khi chó bị bệnh ở giai đoạn 2 thì sẽ có các triệu chứng như mệt mỏi,cơ bắp bại liệt,cơ hàm cứng làm cho chó không thể ăn uống cho nên mới gọi là bệnh “sợ nước”. Là một bệnh nguy hiểm và chó sẽ chết khi mắc bệnh. Không có cách điều trị chỉ có thể hỗ trợ theo tình trạng.</p><h2>Bệnh viêm gan truyền nhiễm</h2><p>Nguyên nhân bênh la do virut Adenovirus, bệnh lây truyền thông qua thức ăn bị nhiễm mầm bệnh từ phân,nước tiểu hay nước dãi của chó bị bệnh. Khi mắc bệnh chó thường có các triệu chứng như ủ rũ, sốt, mệt mỏi, mắt đỏ, tế bào bach cầu thấp. Xuất hiện các triệu chứng bất thường trong quá trình đông máu, bụng phình to. Một số trường hợp tử vong do bệnh phát triển nặng.</p><p>Cho dù có điều trị khỏi bệnh nhưng vẫn có thể còn sót lại các triệu chứng của bệnh thận mãn tính. Và các tổn thương như sưng hay đục giác mạc hay còn gọi là “Blue eye”. Điều trị theo các triệu chứng,tùy vào trương hợp mà một số con bi bệnh cần phải truyền máu.</p><h2>Bệnh cúm và viêm khí quản truyền nhiễm</h2><p>Đa số bệnh la do virut Parainfluenza virut,Adenovirus -2 ,vi khuẩn Borditella bronchoseptica,Mycoplasma spp. Ngoài ra một sô mầm bệnh có thể lây sang người như Chlamydia spp. Bệnh dễ dàng lây lan và giống chó nào cũng có nguy cơ mắc bệnh. Bệnh thường phát triển manh vào mùa lạnh hay vào lúc chuyển mùa.</p><p>Bệnh lây lan qua đường hô hấp,khi chó nhiễm bệnh thường có các triệu chứng như bị cúm,ho,hắt xì hơi, có nước mũi màu trong, khó thở, nhiệt độ cao. Nếu như bệnh phát triển thành mãn tính thì sẽ xuất hiện nước mũi màu xanh, dùng miệng để thở, nhiễm trùng khí quản và phổi. Một số con xuất hiện các triệu chứng co giật hay chết cấp tính. Điều trị theo triệu chứng kết hợp với thuốc kháng sinh.</p><h2>Bệnh lepto</h2><p>Nguyên nhân bệnh là do vi khuẩn Leptospira spp, vi khuẩn thâm nhập vào cơ thể thông qua các vết thương hở trên da hay uống phải nước có mầm bệnh. Vi khuẩn được phát tán qua nước tiểu của chó bị bệnh và lẫn vào trong đất hay nước. Bệnh có thể lây từ động vật sang người. Giai đoạn đầu của bệnh chó thường có các triệu chứng như ủ rũ, chán ăn, nôn, đi phân lỏng hay nặng hơn là đi tiểu có lẫn máu.</p><p>Trong giai đoạn nguy hiểm chó có triệu chứng vàng da,nếu không điều trị kịp thời thì sẽ nguy hiểm đến tính mạng. Trên một số con đã điều trị khỏi nhưng vẫn có thể truyền bệnh thông qua nước tiểu. Điều trị bằng cách sử dụng thuốc kháng sinh kết hợp với việc truyền dịch hỗ trợ.</p><h2>Chương trình tiêm Vacxin</h2><ul><li>4 tuần tuổi:Kiểm tra sức khỏe và tẩy giun.</li><li>6-8 tuần tuổi :Vacxin phòng bệnh(Care,parvo,viêm gan,lepto,cúm và viêm khí quản) mũi 1.</li><li>8-10 tuần tuổi :Vacxin phòng bệnh(Care,parvo,viêm gan,lepto,cúm và viêm khí quản) mũi 2.</li><li>12 tuần tuổi :Vacxin phòng bệnh(Care,parvo,viêm gan,lepto,cúm và viêm khí quản) mũi 1 và tiêm phòng dại mũi 1.</li><li>16 tuần tuổi:Tiêm Vacxin phòng care với parvo.</li><li>6 tháng tuổi:Tiêm phòng dại mũi 2.</li><li>Hàng năm: Tiêm nhắc lại Vắc xin bệnh và phòng dại.</li></ul><p>Bảng giá Vacxin cho chó thay đổi liên tục tùy theo từng thời điểm. Để được báo giá tiêm vacxin cho chó giá rẻ nhất vui lòng comment bên dưới.</p></div>'
        })
    }

    addComment () {        
        this.setState({
            showComment: true
        })
    }

    zoomOut () {        
        if (this.state.fontSize < 20) {
            this.setState({
                fontSize: ++this.state.fontSize
            })
        }
    }

    zoomIn () {
        if (this.state.fontSize > 10) {
            this.setState({
                fontSize: --this.state.fontSize
            })
        }
    }
    
    render() {
        const { showComment, fontSize } = this.state;
        const  { height, width } = Dimensions.get('window');
        const fontText = {
            p: {
                fontSize: fontSize
            }
        }
        const StyleHtml = Object.assign(Style, fontText);        

        return (
            <View style={GlobalStyle.container}>
                <ScrollView>
                    <Text style={Style.title}>Tiêm vacxin cho chó bao nhiêu tiền và có những loại nào</Text>
                    <AutoHeightImage
                        style={Style.image}
                        width={width}
                        imageURL={'https://www.bacsithuy.org/wp-content/uploads/2017/09/tiem-vacxin-cho-cho-bao-nhieu-tien-va-co-nhung-loai-nao-758x506.jpg'}
                    />
                    <HTMLView
                        value={this.state.content}
                        stylesheet={StyleHtml}
                    />
                </ScrollView>
                <ActionsDetail addComment={() => this.addComment()} 
                    zoomIn={() => this.zoomIn()} 
                    zoomOut={() => this.zoomOut()}/>
                {showComment ? <CommentBox/> : (null)}
            </View>
        );
    }
}

export default DetailArticle;

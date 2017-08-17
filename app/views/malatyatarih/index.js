import React, { Component } from 'react';
import {
    ActivityIndicator,
    StatusBar,
    View,
    Image,
    Text,
    ListView,
    TouchableOpacity,
    Dimensions,
    ScrollView
} from 'react-native';

import {
    Container,
    Header,
    Left,
    Button,
    Icon,
    Content,
    CardItem,
    Card,
    Right,
    Body,
    Title,
    List
} from "native-base";


import devLoop from '../../services';
import HTMLView from 'react-native-htmlview';

import styles from './styles';

const { width } = Dimensions.get('window')

export default class Malatyatarih extends Component {


    render() {
const htmlContent = `<p><a href="http://www.malatya.bel.tr/icerik/29/28/malatyanin-tarihi.aspx">&star; Daha fazlasını oku!</a></p>`;


        return (

            <Container style={{
                backgroundColor: 'white'
            }}>

                <Header style={{
                    backgroundColor: '#FF8E00'
                }}>
                    <StatusBar backgroundColor="#FF8E00" />

                    <Left>

                        <Button transparent onPress={() => this.props.navigation.navigate("Malatya")}>
                            <Icon active name="ios-arrow-back" />
                        </Button>

                    </Left>

                    <Body>
                        <Title style={styles.title}> Malatya'nın Tarihi </Title>
                    </Body>

                    <Right></Right>
                </Header>
                <ScrollView>

                    <Image resizeMode='stretch' style={{
                        width: width,
                        height: 300,
                        justifyContent: "center",
                        alignItems: "center"
                    }} source={{ uri: 'http://www.malatya.bel.tr/Files/malatya(eski)/malatya_tarih_06_09_2013_3.jpg' }} />

        
                  <Card>
            <CardItem header>
              <Text style={{fontWeight:'bold'}}>Tarih Öncesi Dönem</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
               Coğrafi konum itibariyle tabii yol üzerinde olan Malatya ön tarihinin Paleolitik çağa kadar indiği, Ansır (buzluk) ve İnderesi mevkiinde bulunan mağaralardan anlaşılmıştır.
               {"\n"}
1979 yılında başlayan Karakaya Baraj Gölü kurtarma kazıları kapsamındaki İzollu mevkii Cafer Höyükte yapılan kazılarda, o yöre insanının Paleolitik mağaralardan çıkıp ilk defa ovada tarım ve hayvancılıkla uğraştıkları ve yerleşik köy hayatına başladıkları anlaşılmıştır. Cafer Höyük kazılarıyla, Malatya ve çevresinin M.Ö. 7000 yılında İskana başladığı anlaşılmaktadır.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
            <HTMLView
        value={htmlContent}    
         stylesheet={styles}   
      />
            </CardItem>
         </Card>
                
                        <Card>
            <CardItem header>
              <Text style={{fontWeight:'bold'}}>Hitit Dönemi</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
              Hititlerin Anadolu'da, M.Ö. 2000 yıllarının başında varlıklarını gösterdikleri Aslantepe'den çıkarılan bazı seramik örneklerinden anlaşılmaktadır.
M.Ö. 1750 yıllarında Kuşsara Kralı Anitta, Anadolu'yu tek bir yönetim altında toplayarak siyasi birliği sağlamıştır.
Bu dönemde Malatya'nın, büyük bir ihtimalle, siyasi birliğe katıldığı sanılmaktadır. I. Hattusilis, Kuzey Suriye yolunu emniyet altına almış, yerine geçen oğlu I. Mursilis ise Anadolu birliğini Halep ve Babil seferlerinden sonra sağlamış. Malatya' nın bu krallar döneminde kuzey Suriye ile Anadolu arasında önemli yol kavşağında olması sebebiyle Hitit birliğine girdiği ve bir Hitit şehri olduğu kabul edilebilir. I. Mursilis, babası I. Hattusilis 'in gösterdiği, dış menfaatlerinin güneyde olduğu fikri üzerine hareket edip, Halep ve Bağdat'ı fethederek "Büyük Kral" unvanını aldığı Akad metinlerinde görülmektedir.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
               <HTMLView
        value={htmlContent}    
         stylesheet={styles}      
      />
            </CardItem>
         </Card>
                
                        <Card>
            <CardItem header>
              <Text style={{fontWeight:'bold'}}> Medler Dönemi</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
             Asurbanipal'ın (M.Ö. 669-631) ölümünden sonra, Asur'un ihtişamlı devri uzun süre devam etmedi. Bu arada Med'ler, Keyaksar'ın (M.Ö. 625-585) idaresinde güçlü bir devlet kurmuşlardır. Asur egemenliğinde bulunan Babil prensliği de hürriyetine kavuşmak istiyordu. Babil prensliğinin başında bulunan Nabupolassar, Asur aleyhine Med kralı Keyaksar ile bir anlaşma yapmıştır. Aynı zamanda Kimmerler'de Med'lerle anlaşarak ittifak halinde harekete geçtiler. Bu kuvvetler, M.Ö. 612'de büyük bir saldırı ile Asur toprakları, Medlerle Babilliler arasında paylaşıldı
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
               <HTMLView
        value={htmlContent}       
      stylesheet={styles}    />
            </CardItem>
         </Card>
                
                        <Card>
            <CardItem header>
              <Text style={{fontWeight:'bold'}}>Persler Dönemi</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
              Pers kralı I. Dareios (Daryus), (M.Ö. 522-485) ülkesinde düzenli bir yönetim kurmak amacıyla ülkeyi 127 vilayetten oluşan 23 büyük Satrab'lığa ayırdı. Malatya bölgesi, merkezi Kayseri (Mazaka) olan Kapadokya büyük satrablığına bağlandı. Malatya yöresinde Med ve Pers egemenliğini yansıtan anıt eserlere rastlanmamıştır. Bölge ekonomisinin can damarı olan Mazaka-Malatya arasındaki yol, bu dönemde önem kazandı. Malatya; İran yaylasını Akdeniz'e bağlayan ulaşım yolu üzerinde sosyal ve ekonomik ilişkilerin düğümlendiği doğu ile batı arasında bir kent oldu.
Malatya, M.Ö. 4. yüzyılda Makedonya Kralı İskender ‘in Anadolu'yu ele geçirmesinden sonra Perslerin idari sistemine dokunmadı. Bölgeye atadığı komutanları ile Hellenistik kültürünün Anadolu'ya yayılmasını sağladı. Malatya, bu dönemde Helen kültürünün etkisinde kalmıştır.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
               <HTMLView
        value={htmlContent}       
      stylesheet={styles}    />
            </CardItem>
         </Card>
                
                        <Card>
            <CardItem header>
              <Text style={{fontWeight:'bold'}}>Roma Dönemi</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
               Roma ordularının uğrak yeri haline gelen Malatya; kuzeyi güneye, doğuyu batıya bağlayan bir düğüm noktası üzerinde bulunuyordu. Fırat nehrinin doğu ile batıyı birbirinden ayırması, buranın önemini daha da artırmıştır. Bu bölgeye Romalılar iki Legionu (lejyon) yerleştirmişlerdir. Bu lejyonlardan biri Melitene'ye (Malatya) gönderilerek görevlendirilen lejyon XII. Fulminita'dır. Diğeri ise Samosata (Samsat-Adıyaman) gönderilen lejyon XVI. Flavia'dır. Roma'nın 30. lejyonundan ikisini Fırat kıyısına yerleştirmesi bölgenin önemini gözler önüne sermektedir. Melitene'de yerleştirilen 12. lejyon doğudaki Roma'nın en önemli askeri bir üssü olmuştur. Bu lejyonlar bölgede asayişi sağlayarak, Karadeniz'den Zaugma'ya kadar uzanan doğu hudutlarının bekçisi olmuştur. Romalıların 12 Lejyonu buraya yerleştirmelerinin sebebi; buranın önemli bir yol kavşağında olması, Fırat'ın burada geçit vermesi, su kaynaklarının ve yiyecek depolarının bol olmasındandır. 12. lejyonun Malatya'da yerleştirilmesi ile Aslantepe'de bulunan şehrin yeri değiştirildi. Buranın 4. km. kuzeyine bugün Battalgazi ilçesi adı verilen yere kuruldu. Şehrin etrafı surlarla çevrildi. Şehir surları (M.S. 98 -117) Traianus döneminde yapılmıştır.  </Text>
              </Body>
            </CardItem>
            <CardItem footer>
                <HTMLView
        value={htmlContent}       
     stylesheet={styles}     />
            </CardItem>
         </Card>
                
                        <Card>
            <CardItem header>
              <Text style={{fontWeight:'bold'}}>Bizans  Dönemi</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
             Doğu Roma yönetiminde uzun yıllar kalan Malatya, yine askeri bir üs olarak kullanılmıştır. Bu süre içerisinde surlar, yeniden onarılmıştır. Fulminatris lejyonu adı verilen askeri karargaha Bizanslılar "Likandos" adını vermişlerdir. Bizans İmparatoru Akil1eon (457-474) Malatya'yı İmparatorluğun 12. Temi olarak adlandırmıştır. 532 yılında imparator Justinyanus zamanında şehir surları yeniden restore edilerek müstahkem hale getirilmiştir. Bunun zamanında Malatya, bir eyalet merkezi durumundadır. Bizanslılar, Malatya'yı Romalılardan daha çok geliştirmişlerdir. Şehrin su ihtiyacı, bugün olduğu gibi Derme Suyu olarak bilinen Gündüzbey su kaynaklarından karşılanmıştır. </Text>
              </Body>
            </CardItem>
            <CardItem footer>
               <HTMLView
        value={htmlContent}       
     stylesheet={styles}     />
            </CardItem>
         </Card>
                
                        <Card>
            <CardItem header>
              <Text style={{fontWeight:'bold'}}>İslam Dönemi</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
              Müslüman Araplar, Anadolu'ya yaptıkları seferlerle Malatya'yı birkaç defa ele geçirmişlerdir. İyaz bin Ganem'in Habib bin Mesleme komutasında Malatya üzerine gönderdiği Arap ordusu kenti aldı ise de burada fazla kalamadı. Karşı saldırıya geçen Bizanslılar kenti geri aldılar.
Suriye valisi Muaviye, Habib bin Mesleme'yi yeniden Malatya üzerine gönderdi. 656 yılında kenti alan Mesleme, buraya askeri birlikler yerleştirdikten sonra yönetimi kendi atadığı bir valiye bıraktı. Muaviye (661-680) bu kente gelerek bir zaman kaldı ve asker sayısını artırdı. Kenti İslamlaştırmak gayesiyle Irak ve Suriye'den Müslüman halkın bir kısmım Malatya'ya getirerek yerleştirdi. Bu dönemde Malatya bizanslılara karşı yapılan yaz seferlerinin üssü durumuna getirilmiştir. </Text>
              </Body>
            </CardItem>
            <CardItem footer>
           <HTMLView
        value={htmlContent}       
      stylesheet={styles}    />
            </CardItem>
         </Card>
                
                        <Card>
            <CardItem header>
              <Text style={{fontWeight:'bold'}}>Selçuklu  Dönemi</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
               11. yüzyılda Türkler akın akın Anadolu'ya yöneldiler. Malazgirt zaferinden önce Malatya 1057 yılında Türklerin eline geçti ise de Bizanslılar kenti geri aldılar. I. İsaakios Comnenos (1057-1059) döneminde Türkler Malatya'yı ele geçirip halkını tutsak ettiler. Kenti tekrar ele geçiren Konstantinos Ducas (1059-1067), (1060-61) yıllarında Malatya'nın sur ve hendeklerini yeniden yaptırdı. Ne var ki kent 1064 ve 1066'da kısa süreli de olsa Türklerin eline geçmesine engel olamadı. Ancak kuşatma için gerekli silahları olmayan Türkler, düzenli Bizans ordularıyla başa çıkamayarak almış oldukları toprakları bırakıp, geriye çekilrnek zorunda kalıyorlardı.</Text>
              </Body>
            </CardItem>
            <CardItem footer>
               <HTMLView
        value={htmlContent}       
      stylesheet={styles}    />
            </CardItem>
         </Card>
                
                        <Card>
            <CardItem header>
              <Text style={{fontWeight:'bold'}}>Beylikler Dönemi</Text>
            </CardItem>
            <CardItem>
              <Body>
                   <Text>
            1317 yılında, İlhanlı hükümdarı Ebu Said Bahadır döneminde, Emir Çoban büyük güç kazandı. Oğlu Timurtaş'ı Anadolu valiliğine atadı. 1327'de Emir Çoban'ın ölümü ile Timurtaş yerine vekil olarak Alaaddin Eratna Bey'i bırakarak Memlüklüler’e sığındı. Eratna Bey, 1338 yılında Memlüklülerin egemenliğini tanıdıysa da 1340 yılında bağımsızlığını ilan etti.</Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <HTMLView
        value={htmlContent}       
      stylesheet={styles}    />
            </CardItem>
         </Card>
                               <Card>
            <CardItem header>
              <Text style={{fontWeight:'bold'}}>Osmanlı Dönemi</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
              Malatya, 1515 yılından itibaren Osmanlı yönetimi altında huzur içerisinde yaşadı. 1577 yılında Suriye'de, Şam Diyade adlı Türkmen aşiretinden Şah İsmail olduğunu iddia eden bir kişi ayaklandı. Malatya yöresindeki Türkmenlerin de ona katılmasıyla sayıları 50.000'i aşan asiler, Kırşehir yöresine kadar ilerlediler. Osmanlı Devleti bu ayaklanmayı güçlükle bastırdı. 1582 yılından sonra İran'la yapılan savaşlar Anadolu'da karışıklıkları daha da arttırdı. </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <HTMLView
        value={htmlContent}       
     stylesheet={styles}     />
            </CardItem>
         </Card>
                               <Card>
            <CardItem header>
              <Text style={{fontWeight:'bold'}}>Cumhuriyet Dönemi</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                 Uzun süren savaşların yorduğu , maddi ve beşeri kayıpların had safhaya ulaştığı ve umutların tükenmek üzere olduğu bir anda , 
                       bu ulusun tarihte bir çok kere yaptığı gibi , tüm ulus kenetlenmiş ve Mustafa Kemal Atatürk önderliğinde silkinerek,
                         işgalciler tarafından kendisine biçilen kefeni yırtmış ve modern Türkiye Cumhuriyetini kurmuştur. 
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <HTMLView
        value={htmlContent}       
     stylesheet={styles}     />
            </CardItem>
         </Card>
                


                  
                </ScrollView>

            </Container>

        );
    }
}


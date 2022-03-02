import React ,{Component} from 'react';
import {Slider,Button,Card,MediaBox,Slide,Caption,Row,Col,CardTitle} from 'react-materialize'

class App extends Component{
  render(){
    return(
      <div>
      <Slider>
          <Slide image={<img alt ='pantai' src =' https://s-ec.bstatic.com/images/hotel/max1024x768/106/106114417.jpg' />} >
            <Caption placement  ='center' >
              <h2>Pantai </h2>
              <h5 >
                Dapatkan Kesempatan Jalan-Jalan Ke Pantai Dengan Membeli Sebuah Product
              </h5>
            </Caption>
          </Slide>
          <Slide fullScreen ={true} option={{height : 400,indicators : true}} image={<img alt ='paris' src =' https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-2017-home?' />} >
            <Caption placement  ='right' >
              <h2>Paris </h2>
              <h5 >
                Dapatkan Kesempatan Jalan-Jalan Ke Paris Dengan Membeli Sebuah Product
              </h5>
            </Caption>
          </Slide>
          <Slide fullScreen ={true} option={{height : 400,indicators : true}} image={<img alt ='Bali' src =' https://img.idxchannel.com/images/idx/2021/10/15/bali.jpg' />} >
            {/*link Sudah tidak Bisa Dipakai*/}
            <Caption placement  ='left' >
              <h2>Bali </h2>
              <h5 >
                Dapatkan Kesempatan Jalan-Jalan Ke Paris Dengan Membeli Sebuah Product
              </h5>
            </Caption>
          </Slide>
        </Slider>

        <h6>Hot List</h6>
        <Row>
          <Col s={3}>
            <Card className ='small' header={<CardTitle image = 'https://ecs7.tokopedia.net/img/cache/300/attachment/2018/8/15/25749302/25749302_274a89a6-ea41-4a3a-ac6b-ce2881016369.jpg' >
            Audio</CardTitle>} >
           <p>Audio Technic Mulai Dari<mark style ={{backgroundColor : 'red'}}> Rp.910 rb</mark></p>
            </Card>
          </Col>
          <Col s={3}>
            <Card className ='small' header={<CardTitle image = 'https://ecs7.tokopedia.net/img/cache/300/attachment/2019/1/16/25287362/25287362_a79f0aa6-cf1f-484f-b1a8-83993245cd6f.jpg' >
            HandPhone</CardTitle>} >
           <p>HandPhone Samsung mulai dari <mark style ={{backgroundColor : 'red'}}>Rp.200 rb</mark></p>
            </Card>
          </Col>
          <Col s={3}>
            <Card className ='small' header={<CardTitle image = 'https://ecs7.tokopedia.net/img/cache/300/attachment/2018/6/26/28201197/28201197_856195f2-b0ba-4711-8200-fd95beaf1df5.jpg' >
            Squishy</CardTitle>} >
           <p>Squishy mulai dari <mark style ={{backgroundColor : 'red'}}>Rp.5,5 rb</mark></p>
            </Card>
          </Col>
          <Col s={3}>
            <Card className ='small' header={<CardTitle image = 'https://ecs7.tokopedia.net/img/cache/300/attachment/2018/4/23/28201197/28201197_0383072a-1766-453c-951a-8b53a719cff0.jpg' >
            Koleksi The Avenger</CardTitle>} >
           <p>Koleksi The Avenger mulai dari <mark style ={{backgroundColor : 'red'}}>Rp.10 rb</mark></p>
            </Card>
          </Col>
        </Row>

      </div>
    )
  }
}

export default App ;

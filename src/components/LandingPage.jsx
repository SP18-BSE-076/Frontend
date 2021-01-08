import React from "react";
const LandingPage = () => {
  return (
    <div>
        <Grid contained>
            <Grid contained>
                <h1 style={{textAlign:"center",color:"black"}}><em>WELCOME TO SMASHERS CLOTHING!</em></h1>
                <h5 style={{textAlign:"center",color:"black"}}><em>BUY YOUR FAVOURITE TRENDY CLOTHES</em></h5>
            </Grid>
        </Grid>
        <Grid contained> 
        <Carousel className="img">
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://i.pinimg.com/originals/80/d2/e9/80d2e97d2cc39f7e4de34760fc5e483e.jpg"
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>Addidas Available Here</h3>
            <p>Addidas Products Available at our Stores</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1445205170230-053b83016050?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1462392246754-28dfa2df8e6b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
        </Grid>
        <Grid contained style={{marginTop:"10px"}}>
        <Grid contained>
        <section id="about-sec">
        <div className="container">
        <div className="row align-items-center">
        <div className ="col-lg-5 text-center">
        <img src="https://templates.designwizard.com/663467c0-7840-11e7-81f8-bf6782823ae8.jpg" className="img-fluid sale-img"></img>
        </div>
        <div className="col-lg-7 text-lg-right text-center text-color about-text">
        <h1>SMASHERS SALE SPRING 2020</h1>
        <p className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        </div>
        </div>
        </div>
        </section>
        <CardDeck className="card">
        <Card>
            <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0268/9715/4090/products/JKM254-BLK_2_3024x.jpg?v=1607809261" />
            <Card.Body>
            <h2>Black Jacket</h2>
            <p>
                RS : 67000 Pkr
            </p>
            
            <Button variant="info" className="cardButton">Buy Now</Button>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0268/9715/4090/products/IMG_8869_720x.jpg?v=1607668088" />
            <Card.Body>
            <h2>Denim Jacket</h2>
            <p>
                RS : 6900 Pkr
            </p>
            
            <Button variant="info" className="cardButton">Buy Now</Button>
            </Card.Body>
                </Card>
        <Card>
            <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0268/9715/4090/products/IMG_3010copy_720x.jpg?v=1607344521" />
            <Card.Body>
            <h2>Green Camo Jacket</h2>
            <p>
                RS : 7800 Pkr
            </p>
            
            <Button variant="info" className="cardButton">Buy Now</Button>
            </Card.Body>
        </Card>
    </CardDeck>
        </Grid>
        </Grid>
        <section className="services py-5 text-center">
    <div className="container">
        <div className="row">
            
            <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                <span className="service-icon">
                    <BiPaperPlane size="5rem"/>
                </span>
                <h5 className="font-wieght-bold text-uppercase">
                    Free Shipping
                </h5>
                <p className="text-capitalize">
                    We provide Free Shipping on all orders above rs:2500/pkr
                </p>
             </div>
             
            <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                <span className="service-icon">
                <BiDollar size="5rem"/>
                </span>
                <h5 className="font-wieght-bold text-uppercase">
                    Cash on delivery
                </h5>
                <p className="text-capitalize">
                    100% Money Back Garauntees
                </p>
             </div>
             
            <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                <span className="service-icon">
                    <BsFillPeopleFill size="5rem"/>
                </span>
                <h5 className="font-wieght-bold text-uppercase">
                    Online Customer Support
                </h5>
                <p className="text-capitalize">
                    24/7 Serving Customers
                </p>
             </div>
             
        </div>
    </div>
</section>
        </div>
  );
};


export default LandingPage;

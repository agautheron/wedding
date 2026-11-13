import * as React from "react";
import { Link, withPrefix } from "gatsby";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
import { withLayout, LayoutProps, menuItems, Background } from "../components/Layout";
import "../css/index.css";
import HeroImage from "../components/HeroImage";
import {
  Button,
  Segment,
  Container,
  Grid,
  Header,
  Icon,
  Image,
} from "semantic-ui-react";

const IndexPage = (props: LayoutProps) =>
  <div>
    {/* Master head */}
		{/* <Segment vertical inverted textAlign="center" className=" vertical inverted masthead responsive">
       <HeaderMenu
        Link={Link} pathname={props.location.pathname} items={menuItems} inverted
	 /> */}
     {/* <Container > className="header">
	  <Background image={"https://upload.wikimedia.org/wikipedia/commons/c/ca/MoulindeBully001.JPG"}>
	  <ImageBackground source={{uri:'https://upload.wikimedia.org/wikipedia/commons/c/ca/MoulindeBully001.JPG'}} style={{width: '100%', height: '100%'}}>
        <Header inverted as="h1">Le Cocktail</Header>
	   </ImageBackground>
         <Header inverted as="h2">Typescript - Jest - Semantic UI</Header>
        <Button primary size="huge">Get started!</Button>
		</Background>*/} 
     {/* </Container> */}
	 <Segment vertical textAlign="center" className="masthead responsive heroImage">
<HeroImage
    imageSrc={withPrefix("/icons/MoulindeBully.jpg")}
		color="#555555"
		gradientDirection="to bottom right"
		height="87vh"
		opacity="0.25"
		childrenStyles={{ color: "#f7f7f7" }}
		parallax
		textPosition="center"
	>
		<h1>Le Cocktail</h1>
	 {/*	<h2>Something about what we offer</h2>
		<button>Click me!</button>*/}
    
	</HeroImage>
    <Segment className="vertical arrow bounce heroArrow">
      </Segment>
	</Segment>
    {/* About this starter */}
   {/* <Segment vertical className="stripe">
      <Grid stackable verticalAlign="middle" className="container">
        <Grid.Row>
          <Grid.Column width="8">
            <Header>Lorem ipsum</Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Porro laudantium ad, quae, perspiciatis ipsa distinctio.
                </p>
            <Header>Dolor sit amet</Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Porro laudantium ad, quae, perspiciatis ipsa distinctio.
                </p>
          </Grid.Column>
          <Grid.Column width="6" floated="right">*/}
            {/* TODO replace with a pretty GIF */}
     {/*       <Header>Lorem ipsum</Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Porro laudantium ad, quae, perspiciatis ipsa distinctio.
                </p>
            <Header>Dolor sit amet</Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Porro laudantium ad, quae, perspiciatis ipsa distinctio.
                </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>*/}

    {/* Key features */}
    <Segment vertical className="stripe alternate feature">
      <Grid columns="3" textAlign="center" divided relaxed stackable className="container">
        <Grid.Row>
          <Grid.Column>
            <Header icon>
              <Icon name="map pin big"></Icon>
              Lieu
            </Header>
            <p>
            Venez nous rejoindre pour un cocktail festif au Moulin de Bully <br/><a href="https://goo.gl/maps/AGZs2AhsXUiqXQCZ9">29 Route du Pont du Coudray, 14320 Feuguerolles-Bully</a>
                </p>
          </Grid.Column>
          <Grid.Column>
            <Header icon>
              <Icon name="clock big"></Icon>
              Horaire
            </Header>
            <p><br/>
              Joignez-vous à la fête de 17h à 19h30.
            </p>
          </Grid.Column>
          <Grid.Column>
            <Header icon>
              <Icon name="car"></Icon>
              Parking
            </Header>
            <p><br/>
              Vous pourrez vous garer dans l'enceinte du Moulin de Bully.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </div>;

export default withLayout(IndexPage);

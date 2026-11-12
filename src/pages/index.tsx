import * as React from "react";
import { Link } from "gatsby";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
import { withLayout, LayoutProps, menuItems } from "../components/Layout";
import {
  Button,
  Segment,
  Container,
  Grid,
  Header,
  Icon,
} from "semantic-ui-react";

const IndexPage = (props: LayoutProps) =>
<div>
    {/* Master head */}
  {/*}  <Segment vertical textAlign="center" className="masthead"> */}
    {/*  <HeaderMenu
        Link={Link} pathname={props.location.pathname} items={menuItems}
      /> */}
      <Segment className="firstSegment">
       {/* <Container text> */}
        <Header inverted as="h1">&#x124;arie<br/>&#38;<br/>&#x125;rthur
          <Header.Subheader>13 juillet 2020</Header.Subheader>
          </Header>
        {/* </Container> */}
      </Segment>
      
      <Segment className="vertical arrow bounce">
      </Segment>
    {/*</div></Segment> */}

    {/* About this starter */}
    <Segment vertical className="stripe">
      <Grid stackable verticalAlign="middle" className="container">
        <Grid.Row centered className="getMarried">
          <h1>
            <span className="color1">N</span><span className="color2">o</span><span className="color3">u</span><span className="color4">s</span> <span className="color5">n</span><span className="color6">o</span><span className="color7">u</span><span className="color8">s</span> <span className="color9">m</span><span className="color10">a</span><span className="color11">r</span><span className="color12">i</span><span className="color13">o</span><span className="color14">n</span><span className="color15">s</span> <span className="color16">!</span> </h1>
      <p><br/><br/>
     {/* Afin de répondre à un maximum de vos questions, vous trouverez sur ce site une multitude d'informations pour notre mariage. <br/>
      Que vous veniez en Normandie pour la première fois ou que vous soyez des grands habitués, vous trouverez quelques propositions de balades, de visites ainsi que quelques logements que nous avons repéré pour vous.*/}
    <b>  C’est une grande joie que nous sommes heureux de partager avec vous ! <br/></b><br/>
      Vous trouverez ici toutes les informations dont vous aurez besoin pour nous accompagner dans ce grand jour.  <br/>
      Que vous veniez en Normandie pour la première fois, ou que vous soyez de grands habitués, vous trouverez quelques idées de balades, de visites et quelques logements !   <br/>
      
      </p>
     {/*    </Grid.Row>
        <Grid.Row>
          <Grid.Column width="8">
            <Header as="h4"><Link to="/messe/">La Cérémonie</Link></Header>
            <p>
              La cérémonie de mariage aura lieu à 15h00 à l'Abbaye aux Dames,<br/>
              <a href="https://goo.gl/maps/4iYhDanTvGfTPiPA8">Place de la Reine Mathilde, 14000 Caen</a>
            </p>
           <Header as="h4"><Link to="/cocktail/">Le Cocktail</Link></Header>
            <p>
              La cérémonie de mariage aura lieu à 15h00 à l'Abbaye aux Dames,<br/>
              <a href="https://goo.gl/maps/4iYhDanTvGfTPiPA8">Place de la Reine Mathilde, 14000 Caen</a>
            </p>
          </Grid.Column>
          <Grid.Column width="6" floated="right">
            {/* TODO replace with a pretty GIF */}
          {/*   <Header as="h4"><Link to="/cocktail/">Le Cocktail</Link></Header>
            <p>
              La cérémonie de mariage aura lieu à 15h00 à l'Abbaye aux Dames,<br/>
              <a href="https://goo.gl/maps/4iYhDanTvGfTPiPA8">Place de la Reine Mathilde, 14000 Caen</a>
     </p> */}
         {/*   <Header>Dolor sit amet</Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Porro laudantium ad, quae, perspiciatis ipsa distinctio.
                </p>*/}
        {/*   </Grid.Column> */}
        </Grid.Row>
      </Grid>
    </Segment>

    {/* Key features */}
    <Segment vertical className="stripe alternate feature">
      <Grid columns="3" textAlign="center" divided relaxed stackable className="container">
      <Grid.Row centered className="getMarried">
      <h1><span className="color5">O</span><span className="color4">s</span><span className="color7">e</span><span className="color2">z</span> <span className="color6">l</span><span className="color8">a</span> <span className="color9">c</span><span className="color10">o</span><span className="color11">u</span><span className="color12">l</span><span className="color16">e</span><span className="color9">u</span><span className="color13">r</span> <span className="color1">!</span> </h1>
          <p><br/>
          Femmes comme Hommes, n’hésitez pas à vous vêtir de couleur pour que la fête prenne une belle allure estivale ! <br/> Pantalon, robe, salopette et autres tenues de couleur sont bienvenues !
          <br/><br/><br/>
          </p>
        </Grid.Row>
      </Grid>
        </Segment>
    <Segment vertical className="stripe alternate feature">
      
    <Grid columns="3" textAlign="center" divided relaxed stackable className="container">
        <Grid.Row centered>
          <h2> Plus d'infos ? </h2>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
           <Link to="/messe/"><Header icon>
              <Icon name="fas fa-church"></Icon>
              La cérémonie
            </Header></Link>
          {/*    <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptas eaque at quae cupiditate aspernatur quibusdam!
                  Distinctio quod non, harum dolorum earum molestias,
                  beatae expedita aliquam dolorem asperiores nemo amet quaerat.
          </p> */}
          </Grid.Column>
          <Grid.Column>
           <Link to="/cocktail/"><Header icon>
              <Icon name="fas fa-glass-cheers"></Icon>
              Le cocktail
            </Header></Link>
         {/*   <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptas eaque at quae cupiditate aspernatur quibusdam!
                  Distinctio quod non, harum dolorum earum molestias,
                  beatae expedita aliquam dolorem asperiores nemo amet quaerat.
                </p> */}
          </Grid.Column>
          
          <Grid.Column>
           <Link to="/transport/"><Header icon>
              <Icon name="car"></Icon>
              Comment venir ?
            </Header></Link>
          </Grid.Column>
        </Grid.Row>
        {/*  <Grid.Column>
            <Header icon>
              <Icon name="wizard"></Icon>
              A kind of magic!
            </Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptas eaque at quae cupiditate aspernatur quibusdam!
                  Distinctio quod non, harum dolorum earum molestias,
                  beatae expedita aliquam dolorem asperiores nemo amet quaerat.
                </p>
          </Grid.Column>
        </Grid.Row> */}
      </Grid>
    </Segment>
  </div>;

export default withLayout(IndexPage);

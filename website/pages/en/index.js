/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);



const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <h4 className="projectTitle">
        <small>{props.title}</small>
      </h4>
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

const Button = props => (
  <div className="pluginWrapper buttonWrapper">
    <a className="button" href={props.href} target={props.target}>
      {props.children}
    </a>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = '' } = this.props;
    const { baseUrl, docsUrl, woraUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;
    const woraDoc = doc => `${woraUrl}${docsPart}${langPart}${doc}`;

    

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    // <Logo img_src={`${baseUrl}img/undraw_monitor.svg`} />
    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection title="Caching">
            <Button href={woraDoc('cache-persist.html')}>Cache Persist</Button>
            <Button href={woraDoc('apollo-cache.html')}>Apollo Cache</Button>
            <Button href={woraDoc('relay-store.html')}>Relay Store</Button>
          </PromoSection>
          <PromoSection title="Networking">
            <Button href={woraDoc('netinfo.html')}>NetInfo</Button>
            <Button href={woraDoc('detect-network.html')}>Detect Network</Button>
          </PromoSection>
          <PromoSection title="Offline">
            <Button href={woraDoc('offline-first.html')}>Offline First</Button>
            <Button href={woraDoc('apollo-offline.html')}>Apollo Offline</Button>
            <Button href={woraDoc('relay-offline.html')}>Relay Offline</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = '' } = this.props;
    const { baseUrl } = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const OtherRepositories = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{ textAlign: 'center' }}>
        <h2>Other Repositories</h2>
        <SplashContainer>
          <div className="inner">
            <PromoSection>
              <Button href="https://github.com/morrys/react-relay-offline">React Relay Offline</Button>
              <Button href="https://github.com/morrys/react-relay-appsync">React Relay Appsync</Button>
              <Button href="https://github.com/relay-tools/relay-hooks">Relay Hooks</Button>
              <Button href="https://github.com/morrys/offline-examples">Offline Examples</Button>
            </PromoSection>
          </div>
        </SplashContainer>
      </div>
    );

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content:
              'To make your landing page more attractive, use illustrations! Check out ' +
              '[**unDraw**](https://undraw.co/) which provides you with customizable illustrations which are free to use. ' +
              'The illustrations you see on this page are from unDraw.',
            image: `${baseUrl}img/undraw_code_review.svg`,
            imageAlign: 'left',
            title: 'Wonderful SVG Illustrations',
          },
        ]}
      </Block>
    );

    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
              'This is another description of how this project is useful',
            image: `${baseUrl}img/undraw_note_list.svg`,
            imageAlign: 'right',
            title: 'Description',
          },
        ]}
      </Block>
    );

    const LearnHow = () => (
      <Block background="light">
        {[
          {
            content:
              'Each new Docusaurus project has **randomly-generated** theme colors.',
            image: `${baseUrl}img/undraw_youtube_tutorial.svg`,
            imageAlign: 'right',
            title: 'Randomly Generated Theme Colors',
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'This is the content of my feature',
            image: `${baseUrl}img/undraw_react.svg`,
            imageAlign: 'top',
            title: 'Feature One',
          },
          {
            content: 'The content of my second feature',
            image: `${baseUrl}img/undraw_operating_system.svg`,
            imageAlign: 'top',
            title: 'Feature Two',
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };
    /*
          <Features />
          <FeatureCallout />
          <LearnHow />
          <TryOut />
          <Description />
    */

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <OtherRepositories />
          <Showcase />
        </div>
      </div>
    );
  }
}

module.exports = Index;

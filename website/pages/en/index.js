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



class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = '' } = this.props;
    const { baseUrl, docsUrl, repos, projectName, organizationName } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;



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


    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );




    const ButtonLibrary = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="library button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    const Button = props => (
      <div className="stars">
        {props.children}
      </div>
    );

    const ButtonDocs = props => (
      <div className="stars">
        <a className="library button buttonDocs" href={props.href} target={props.target}>
        {props.children}
        </a>
      </div>
    );

    const RepoTitle = ({ repo }) => (
      <div className="repoContainer">
        <React.Fragment><div className="divRepoTitle"><h3 className="repoTitle" >{repo.title}</h3></div>
          {repo.docs && <ButtonDocs href={repo.docs}>Docs</ButtonDocs>}
          <Button><a
            className="github-button"
            href={repo.url}
            data-icon="mark-github"
            data-size="large"
            aria-label="Go to GitHub">
          </a></Button>
          <Button><a
            className="github-button"
            href={repo.url}
            data-icon="octicon-star"
            data-count-href={repo.url + 'stargazers'}
            data-show-count="true"
            data-size="large"
            data-count-aria-label="# stargazers on GitHub"
            aria-label="Star this project on GitHub">
          </a></Button>

        </React.Fragment>
      </div>
    );

    const Categoria = ({ repo, cat }) => {
      const libraries = cat.libraries.map(lib => <ButtonLibrary href={repo.baseDocs + lib.html}>{lib.npm}</ButtonLibrary>)
      return (<div className="section categoriaSection">
        <div className="categoriaRow">
          <h4 className="categoriaTitle">
            <small>{cat.title}</small>
          </h4>
          <div className="pluginRowBlock libreriesContainer">{libraries}</div>
        </div>
      </div>
      )
    };

    const Repository = ({ repo }) => {
      const categorie = repo.categories.map(cat => <Categoria repo={repo} cat={cat} />)
      return (
        <div className="repositoryContainer">
          <RepoTitle repo={repo} />
          <p className="repositoryDescription">{repo.description}</p>
          <div className="categories">
            {categorie}
          </div>
        </div>
      )
    };

    const reposGit = Object.keys(repos).map(key => <Repository repo={repos[key]} />);

    // <Logo img_src={`${baseUrl}img/undraw_monitor.svg`} />
    return (
      <SplashContainer>
        <div className="inner customInner">
          <ProjectTitle siteConfig={siteConfig} />
          <div className="repositoriesContainer">
            {reposGit}
          </div>
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

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Showcase />
        </div>
      </div>
    );
  }
}

module.exports = Index;

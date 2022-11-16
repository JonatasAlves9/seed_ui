import Link from '@docusaurus/Link';
import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import { SiTwitter } from 'react-icons/si';

export default function () {
  const { colorMode } = useColorMode();
  const darkFooter = colorMode === 'dark' ? 'footer-dark' : '';
  return (
    <footer
      style={{ fontSize: 'small' }}
      className={'footer text--sm ' + darkFooter}
    >
      <div className="container container-fluid">
        <div className="row footer__links">
          <div className="col footer__col">
            <div className="footer__title">Docs</div>
            <ul className="footer__items clean-list">
              <li className="footer__item">
                <a className="footer__link-item" href="/docs">
                  Getting Started
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link-item" href="/docs/customizing">
                  Customizing
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link-item" href="/migration-guides">
                  Migration Guides
                </a>
              </li>
            </ul>
          </div>
          <div className="col footer__col">
            <div className="footer__title">Contribution</div>
            <ul className="footer__items clean-list">
              <li className="footer__item">
                <a
                  className="footer__link-item"
                  href="/docs/contributing#setup"
                >
                  Setup Guide
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link-item" href="/docs/contributing">
                  Contribution Guide
                </a>
              </li>
              <a
                href="https://github.com/react-native-elements/react-native-elements/issues/new/choose"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link-item"
              >
                Submit a bug or feature
              </a>
            </ul>
          </div>
          <div className="col footer__col">
            <div className="footer__title">Community</div>
            <ul className="footer__items clean-list">
              <li className="footer__item">
                <a
                  href="https://react-native-elements-slack.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link-item"
                >
                  Slack
                </a>
              </li>
              <li className="footer__item">
                <a
                  href="https://twitter.com/rn_elements"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link-item"
                >
                  Twitter
                </a>
              </li>
              <li className="footer__item">
                <a
                  href="https://github.com/react-native-elements/react-native-elements/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link-item"
                >
                  GitHub Discussions
                </a>
              </li>
            </ul>
          </div>
          <div className="col footer__col">
            <div className="footer__title">More</div>
            <ul className="footer__items clean-list">
              <li className="footer__item">
                <a
                  href="https://stackoverflow.com/questions/tagged/react-native-elements"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link-item"
                >
                  StackOverflow
                </a>
              </li>
              <li className="footer__item">
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=rne.snippets"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link-item"
                >
                  VS Code Extension
                </a>
              </li>
              <li className="footer__item">
                <a href="/sponsor" className="footer__link-item">
                  Our Sponsors
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom text--center">
          <div className="margin-bottom--sm">
            <Link
              to="https://twitter.com/rn_elements"
              className="button button--primary button--md  margin-horiz--sm margin-vert--sm "
              style={{ backgroundColor: '#1DA1F2', color: 'white' }}
            >
              Follow us on Twitter <SiTwitter />
            </Link>
          </div>
          <div className="margin-bottom--sm">
            <img
              src="/img/logo.png"
              alt=""
              className="themedImage_node_modules-@docusaurus-theme-classic-lib-next-theme-ThemedImage-styles-module themedImage--dark_node_modules-@docusaurus-theme-classic-lib-next-theme-ThemedImage-styles-module footer__logo"
            />
          </div>
        </div>
      </div>
      <div className="text--center"></div>
    </footer>
  );
}

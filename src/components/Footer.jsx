import React from 'react';
import NewsletterSubscribeForm from './NewsletterSubscribeForm';

export default function Footer() {
  return (
    <footer className="pa4 pa5-l black-70 bt b--black-10">
      <div className="mb4-l cf">
        <h1 className="fl w-100 pv0 f6 fw6 ttu tracked mb4">AndrÉs En InglÉs</h1>
        {/* Youtube Button */}
        <div
          className="g-ytsubscribe"
          data-channelid="UCZUiKfemh1zGgAAL8qeWPMg"
          data-layout="default"
          data-count="default"
        />
      </div>
      <section className="cf mb5">
        <div className="mb4 mb0-ns w-100 w-50-l fr">
          <a className="black-70 f3 f2-ns fw6 tl link dim dib pv3 mt2 mb4 mb0-l" href="mailto:hello@impossible.com">
            andrespfranklin@gmail.com
          </a>
        </div>
        <NewsletterSubscribeForm/>
      </section>
      <div className="dt dt--fixed w-100">
        <div className="dn dtc-ns v-mid">
          <p className="f7 black-70 dib pr3 mb3">Copyright © absolutandres 2018</p>
        </div>
        <div className="db dtc-ns black-70 tc tr-ns v-mid">
          <a href="https://www.facebook.com/absolutandres" className="link dim dib mr3 black-70" title="Andres en ingles on Facebook">
            <svg className="db w2 h2" data-icon="facebook" viewBox="0 0 32 32" fill="currentColor">
              <title>facebook icon</title>
              <path d="M8 12 L13 12 L13 8 C13 2 17 1 24 2 L24 7 C20 7 19 7 19 10 L19 12 L24 12 L23 18 L19 18 L19 30 L13 30 L13 18 L8 18 z" />
            </svg>
          </a>
          <a href="https://twitter.com/absolutandres" className="link dim dib mr3 black-70" title="Andres en ingles on Twitter">
            <svg className="db w2 h2" data-icon="twitter" viewBox="0 0 32 32" fill="currentColor">
              <title>twitter icon</title>
              <path d="M2 4 C6 8 10 12 15 11 A6 6 0 0 1 22 4 A6 6 0 0 1 26 6 A8 8 0 0 0 31 4 A8 8 0 0 1 28 8 A8 8 0 0 0 32 7 A8 8 0 0 1 28 11 A18 18 0 0 1 10 30 A18 18 0 0 1 0 27 A12 12 0 0 0 8 24 A8 8 0 0 1 3 20 A8 8 0 0 0 6 19.5 A8 8 0 0 1 0 12 A8 8 0 0 0 3 13 A8 8 0 0 1 2 4" />
            </svg>
          </a>
          <a href="https://www.youtube.com/user/soyimaginario" className="link dim dib mr3 black-70" title="Andres en ingles on youtube">
            <svg
              className="dib w2 h2"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fillRule="evenodd"
              clipRule="evenodd"
              strokeLinejoin="round"
              strokeMiterlimit="1.414"
            >
              <path d="M0 7.345c0-1.294.16-2.59.16-2.59s.156-1.1.636-1.587c.608-.637 1.408-.617 1.764-.684C3.84 2.36 8 2.324 8 2.324s3.362.004 5.6.166c.314.038.996.04 1.604.678.48.486.636 1.588.636 1.588S16 6.05 16 7.346v1.258c0 1.296-.16 2.59-.16 2.59s-.156 1.102-.636 1.588c-.608.638-1.29.64-1.604.678-2.238.162-5.6.166-5.6.166s-4.16-.037-5.44-.16c-.356-.067-1.156-.047-1.764-.684-.48-.487-.636-1.587-.636-1.587S0 9.9 0 8.605v-1.26zm6.348 2.73V5.58l4.323 2.255-4.32 2.24h-.002z" />
            </svg>
          </a>
          {/* <a href="https://www.linkedin.com/company/" className="link dim dib black-70">
            <svg className="db w2 h2" x="0px" y="0px" viewBox="0 0 48 48">
              <linearGradient gradientUnits="userSpaceOnUse" x1="23.9995" y1="0" x2="23.9995" y2="48.0005">
                <stop offset="0" />
                <stop offset="1" />
              </linearGradient>
              <path
                fill="currentColor"
                d="M48,42c0,3.313-2.687,6-6,6H6c-3.313,0-6-2.687-6-6V6 c0-3.313,2.687-6,6-6h36c3.313,0,6,2.687,6,6V42z"
              />
              <g>
                <g>
                  <path
                    fill="#FFFFFF"
                    d="M15.731,11.633c-1.608,0-2.658,1.083-2.625,2.527c-0.033,1.378,1.018,2.494,2.593,2.494 c1.641,0,2.691-1.116,2.691-2.494C18.357,12.716,17.339,11.633,15.731,11.633z M13.237,35.557h4.988V18.508h-4.988V35.557z M31.712,18.748c-1.595,0-3.222-0.329-4.956,2.36h-0.099l-0.087-2.599h-4.417c0.065,1.411,0.074,3.518,0.074,5.52v11.529h4.988 v-9.854c0-0.46,0.065-0.919,0.196-1.248c0.328-0.919,1.149-1.871,2.527-1.871c1.805,0,2.527,1.411,2.527,3.479v9.494h4.988V25.439 C37.455,20.713,34.993,18.748,31.712,18.748z"
                  />
                </g>
              </g>
            </svg>
          </a> */}
          
        </div>
      </div>
      <div className="db dn-ns">
        <p className="f7 black-70 mt4 tc">Copyright © Your Company 2038</p>
      </div>
    </footer>
  );
}

import React from 'react';

export default function About() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6 className="mt-bottom">
            <strong>ABOUT ME</strong>
          </h6>
          <p className="grey-text">
            My name is Huseyn Aghazada. My major is Information Security at the university of Baku Higher Oil School. This is my personal resume page, written in react.
          </p>
        </div>
        <div className="card-action">
          <h6>
            <strong>PERSONAL INFO</strong>
          </h6>
          <div className="row mt">
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Address:</strong> Badamdar, Baku.
              </p>
              <p>
                <strong>Email:</strong> huseyn.aghazada.std@bhos.edu.az OR huseynagazade969@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> +994 55 231 43 66
              </p>
            </div>
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Native Language</strong> - Azerbaijan
              </p>
              <p>
                <strong>IELTS 7.0 </strong> - English
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

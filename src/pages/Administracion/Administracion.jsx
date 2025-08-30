import React from 'react';
import './Administracion.css';



export default function Administracion() {
  return (
      <div className="padre">
          <div className="navegacion">
              <div className="logo">
                  <img src={Logo} alt="logo once23" />
              </div>

              <div className="botones">
                  <button class="learn-more">
                      <span class="circle" aria-hidden="true">
                          <span class="icon arrow"></span>
                      </span>
                      <span class="button-text">
                          <span className="icono">
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  id="Layer_1"
                                  data-name="Layer 1"
                                  width="17"
                                  height="17"
                                  viewBox="0 0 24 24"
                              >
                                  <path
                                      d="M22.312,19.519l-5.002,4.481H1s1.114-4.273,1.153-4.375c.612-2.131,2.551-3.625,4.79-3.625h5.776c1.06,0,1.922,.862,1.922,1.922,0,.95-.709,1.769-1.65,1.902l-4.798,.686,.283,1.98,4.798-.686c1.392-.199,2.526-1.135,3.05-2.371l3.333-2.934c.838-.73,2.109-.641,2.838,.197h0c.723,.832,.642,2.091-.182,2.822Zm.282-7.519c-.748-4.568-4.37-8.157-8.951-8.863,0,0,0,0,0,0,.224-.323,.357-.714,.357-1.137,0-1.105-.895-2-2-2s-2,.895-2,2c0,.423,.133,.814,.357,1.137h0C5.776,3.843,2.154,7.432,1.406,12H0v2H24v-2h-1.406Z"
                                      fill="currentColor"
                                  />
                              </svg>
                          </span>
                          Pedidos
                      </span>
                  </button>

                  <button class="learn-more">
                      <span class="circle" aria-hidden="true">
                          <span class="icon arrow"></span>
                      </span>
                      <span class="button-text">
                          <span className="icono">
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="17"
                                  height="17"
                                  viewBox="0 0 16 16"
                              >
                                  <path
                                      fill="currentColor"
                                      d="M4 3v9.4c-.4-.2-.9-.4-1.5-.4c-1.4 0-2.5.9-2.5 2s1.1 2 2.5 2S5 15.1 5 14V6.7l7-2.3v5.1c-.4-.3-.9-.5-1.5-.5C9.1 9 8 9.9 8 11s1.1 2 2.5 2s2.5-.9 2.5-2V0z"
                                  />
                              </svg>
                          </span>
                          Música
                      </span>
                  </button>
              </div>
          </div>

          <div className="contenidos">
              <h1>contenido</h1>
          </div>
      </div>
  );
}

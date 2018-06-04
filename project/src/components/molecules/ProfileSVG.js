import Component from '../../lib/Component';
import SVG from './../atoms/SVG';

class ProfileSVG extends Component {
  constructor() {
    super();
    this.svg = new SVG({
      svg: `<svg x="0px" y="0px" viewBox="0 0 466.972 466.972" width="100px" height="100px">
          <circle cx="171.225" cy="243.032" r="10.831" fill="#FFFFFF"/>
          <circle cx="295.746" cy="243.032" r="10.831" fill="#FFFFFF"/>
          <path d="M233.482,316.188c6.747,0,13.133-2.563,17.982-7.219c2.191-2.104,2.262-5.586,0.159-7.776s-5.585-2.262-7.777-0.159   c-2.791,2.679-6.471,4.154-10.364,4.154c-3.888,0-7.565-1.476-10.355-4.154c-2.19-2.102-5.672-2.032-7.777,0.159   c-2.104,2.19-2.032,5.673,0.159,7.776C220.357,313.625,226.74,316.188,233.482,316.188z" fill="#FFFFFF"/>
          <path d="M398.585,68.387C354.485,24.287,295.852,0,233.486,0s-121,24.287-165.099,68.387S0,171.119,0,233.485   s24.287,121,68.386,165.1s102.733,68.387,165.099,68.387s121-24.287,165.1-68.387c44.1-44.1,68.386-102.733,68.386-165.1   S442.685,112.486,398.585,68.387z M99.576,411.191c15.152-28.007,38.824-50.674,67.407-64.566l27.313,54.978   c0.77,1.55,2.225,2.647,3.927,2.961c0.333,0.062,0.667,0.092,0.999,0.092c1.369,0,2.703-0.512,3.727-1.455l24.54-22.609v46.898   c0,3.037,2.462,5.5,5.5,5.5s5.5-2.463,5.5-5.5v-47.11l25.071,22.779c1.272,1.156,3.013,1.652,4.703,1.337   c1.69-0.313,3.137-1.4,3.909-2.937l27.624-54.929c28.641,13.901,52.367,36.579,67.557,64.593   c-38.375,29.029-84.911,44.749-133.869,44.749C184.51,455.972,137.959,440.241,99.576,411.191z M103.083,239.049   c1.881,7.627,4.409,15.029,7.566,22.139c-4.587-2.736-7.934-7.461-8.69-13.062C101.536,244.995,101.955,241.878,103.083,239.049z    M110.037,205.417c0-8.252,0.827-16.315,2.391-24.116c2.877,3.337,6.224,6.543,10.026,9.598v69.616   C114.29,243.72,110.037,224.989,110.037,205.417z M131.153,183.067c-7.039-5.328-12.042-10.333-15.14-15.448   c16.095-49.509,62.914-85.423,118.022-85.423c32.89,0,63.773,12.814,86.96,36.083c23.172,23.254,35.934,54.2,35.934,87.138   c0,0.148-0.006,0.295-0.007,0.443c-2.824,2.54-10.447,4.158-16.433,4.607c-0.824,0.062-3.881,0.16-4.42,0.161   c-56.821,0.104-92.982-33.111-93.339-33.445c-1.731-1.632-4.314-1.967-6.403-0.83c-2.089,1.138-3.21,3.488-2.78,5.827   c0.134,0.729,2.83,14.851,11.851,27.672C175.791,214.146,131.597,183.404,131.153,183.067z M365.014,248.13   c-0.845,6.267-4.764,11.312-10.048,13.832c3.635-7.622,6.529-15.486,8.648-23.514C364.938,241.439,365.464,244.786,365.014,248.13z    M349.228,220.339c2.565-0.493,4.884-1.106,6.959-1.837c-1.622,14.487-5.916,28.65-12.733,41.962v-39.292   C345.149,221.001,347.138,220.74,349.228,220.339z M133.454,197.356c17.815,9.889,61.866,29.318,123.7,22.525   c2.135-0.234,3.938-1.689,4.617-3.727c0.679-2.038,0.11-4.284-1.456-5.753c-4.402-4.127-7.69-9.138-10.1-13.882   c16.141,10.416,44.593,24.325,82.239,25.08v56.644c-17.691,48.014-56.761,79.025-99.605,79.025   c-42.709,0-81.596-30.775-99.395-78.504V197.356z M283.368,354.814l-17.77,35.334l-24.468-22.232   C255.968,366.681,270.251,362.154,283.368,354.814z M224.982,367.944l-24.095,22.199l-17.174-34.57   C196.568,362.531,210.51,366.802,224.982,367.944z M390.807,390.807c-4.732,4.733-9.649,9.212-14.719,13.46   c-15.954-28.595-40.262-51.861-69.492-66.547c15.041-14.094,27.392-32.528,35.624-54.228c0.055-0.068,3.33-4.868,5.809-8.79   c14.058-0.354,25.954-10.764,27.887-25.102c1.285-9.54-2.339-19.098-9.374-25.441c0.911-6.193,1.388-12.45,1.388-18.741   c0-35.869-13.901-69.572-39.142-94.902c-25.266-25.354-58.917-39.318-94.752-39.318c-74.438,0-134.998,60.211-134.998,134.221   c0,6.378,0.43,12.672,1.254,18.858c-7.009,6.373-10.521,15.81-9.233,25.325c1.836,13.609,13.156,23.996,26.546,25.024   c2.545,4.144,6.02,9.309,6.077,9.38c8.307,21.664,20.713,40.044,35.798,54.07c-28.858,14.697-52.851,37.802-68.638,66.157   c-5.054-4.237-9.957-8.705-14.677-13.425C34.143,348.784,11,292.913,11,233.485s23.143-115.299,65.165-157.32   C118.187,34.143,174.058,11,233.486,11c59.428,0,115.299,23.143,157.321,65.165c42.022,42.021,65.165,97.893,65.165,157.32   S432.829,348.785,390.807,390.807z" fill="#FFFFFF"/>
        </svg>`,
    });
  }
  
  render() {
    return `
      <div class="main-content-svg-box flex-center-sort flex-container">
         ${this.svg.render()}
      </div>
    `;
  }
}

export default ProfileSVG;
import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import { NavLink } from './nav-link'

const Footer = ({ siteTitle }) => (
  <footer
    css={`
      background: #141618;
      position: relative;
      text-align: center;
      width: 100vw;
      padding: 3rem calc((100vw - 1140px) / 2) 2rem;
      color: #b5b3b3;

      > * {
        margin-bottom: 30px;
      }

      hr {
        opacity: 0.1;
        background-color: #fff;
      }

      ul {
        font-weight: 700;
        padding-left: 0;
        list-style: none;
        text-transform: uppercase;
        margin-top: 3px;

        li {
          display: inline-block;
          padding-right: 1rem;
          font-size: 1.125rem;
          margin: 0;

          a {
            opacity: 0.8;
          }
        }
      }

      .active {
        opacity: 1;
        color: #fff;
      }
    `}
  >
    <div>
      <Link to='/'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='100 150 385 450'
          width='50'
          height='50'
          aria-labelledby='fern'
          role='presentation'
          fill='#b5b3b3'
        >
          <title id='fern' lang='en'>
            Fern Icon
          </title>
          <path d='M402.768,420.896c6.936-3.065,15.188-5.879,24.471-9.164c9.47-3.35,30.715-15.18,29.606-20.304   c-2.265-6.066-38.039,12.122-46.367,18.354c-0.069-0.514,4.316-5.685,4.795-6.242c1.354-1.578,2.723-3.291,4.097-4.959   c1.846-2.242,3.896-4.168,6.037-6.145c4.162-3.841,8.332-7.845,11.966-12.397c3.599-4.51,5.198-5.843,8.363-11.311   c2.104-3.633,3.689-11.148,2.632-12.604c-0.887-0.926-11.666,4.616-19.727,13.35c-6.309,6.834-11.679,14.456-16.063,23.178   c-1.428,2.84-2.421,5.922-4.312,8.516c1.252-5.812,3.358-12.843,3.018-20.051c-0.339-7.188-0.473-21.746-4.187-23.98   c-2.159-1.059-6.377,18.68-6.378,27.107c0,4.039,0.194,8.279,0.323,12.397c0.135,4.283,0.493,8.671,0.108,12.505   c-0.148,1.479-1.584,2.593-2.372,3.45c1.083-8.316,0.832-16.407-1.06-22.962c-1.906-6.607-6.34-27.207-8.043-27.184   c-3.853,0.334-2.732,23.922-1.785,32.679c0.645,5.965,3.062,12.973,4.743,18.222c0.543,1.693,1.355,4.066,1.186,5.498   c-0.171,1.44-2.241,3.152-2.803,4.096c-1.84-10.328-3.405-20.708-7.367-29.107c-2.747-5.822-6.599-10.208-11.714-14.122   c-2.353-1.8-7.235-4.908-8.193-3.989c-3.566,4.596,2.523,22.645,7.331,30.509c4.942,8.086,10.664,15.431,15.416,23.394   c-1.056,1.926-2.146,3.818-3.45,5.497c-4.633-8.033-6.767-17.521-12.937-23.824c-4.642-4.741-10.713-7.558-16.752-11.019   c-2.062-1.182-5.912-2.54-6.856-2.133c-2.271,1.419,6.497,18.698,12.937,25.01c6.449,6.322,15.092,10.282,20.482,17.572   c-0.796,1.755-2.757,4.594-3.486,6.415c-0.833-0.43-1.275-1.328-1.833-2.048c-3.969-5.123-8.515-13.836-14.066-17.605   c-6.5-4.413-18.64-9.739-22.018-9.671c-2.857,0.158,13.673,21.687,25.341,27.544c4.163,2.091,7.024,4.409,9.772,7.494   c-4.79,9.979-7.613,19.677-10.743,31.315c-12.672-32.642-25.293-65.332-41.396-94.543c3.493-2.698,7.262-5.099,11.212-7.438   c3.904-2.312,8.083-4.274,12.182-6.468c8.092-4.331,16.483-8.48,24.902-12.397c14.602-6.792,29.08-14.356,38.271-27.058   c1.759-2.432,6.253-7.893,3.233-8.301c-12.273-2.086-23.821,0.104-32.341,3.881c-8.793,3.898-16.019,9.401-22.746,14.985   c-12.884,10.693-23.893,23.267-35.252,35.575c-0.7,0.759-1.37,1.612-2.264,2.156c-0.85-1.666-0.241-0.808-1.075-2.49   c5.698-10.351,11.699-21.545,19.617-30.066c7.841-8.438,15.079-14.194,22.306-23.336c7.187-9.089,11.479-16.47,18.966-29.446   c2.083-3.61,5.065-9.622,10.48-24.955c0.988-2.798,5.989-12.976,4.737-17.777c-0.798-3.054-16.64,13.62-24.7,21.271   c-8.581,8.145-16.05,18.858-23.272,28.427c-14.534,19.254-21.554,44.901-31.129,69.395c-0.54-0.751-5.069-6.12-5.093-6.762   c-0.026-0.707,1.237-2.642,1.617-3.557c7.576-18.27,15.381-35.863,22.53-54.549c3.787-9.898,7.207-20.075,7.978-33.203   c0.666-11.338-1.539-22.834-3.126-32.449c-0.404-2.444-1.356-7.921-3.773-6.253c-1.561,1.078-3.258,3.412-4.42,5.175   c-8.955,13.583-13.941,30.267-17.464,49.266c-4.049,21.836-4.339,46.18-7.654,68.563c-0.365,0.101-11.102-17.221-13.543-20.623   c1.766-11.144,6.406-19.536,8.262-27.893c2.52-11.338,3.313-22.562,2.693-35.572c-1.011-21.241-6.69-39.989-10.814-57.291   c-0.567-2.378-2.642-9.734-4.971-9.652c-2.209,0.077-2.384,6.161-2.648,8.541c-1.842,16.596-2.993,34.478-4.097,51.827   c-1.252,19.69,1.585,46.461,5.779,62.795c0.056,0.324-11.479-13.297-14.834-16.979c2.062-9.388,2.867-21.499,1.401-31.694   c-1.396-9.709-4.566-18.665-7.654-26.843c-5.435-14.397-12.68-28.195-20.674-40.455c-1.159-1.777-4.002-6.582-5.572-7.191   c-0.738-0.269-1.214,0.642-1.244,4.309c0.149,4.706,2.5,28.495,5.591,43.024c3.116,14.643,7.7,27.953,18.808,48.722   c-0.268,0.207-7.365-7.119-8.121-7.875c-7.07-7.07-14.818-14.715-18.312-21.204c-5.38-9.992-10.926-22.414-21.906-33.394   c-8.153-8.153-22.127-17.274-29.001-21.007c-10.849-5.89-29.446-13.974-28.947-9.482c0.7,6.302,13.476,27.45,34.937,44.918   c7.492,6.099,26.047,15.519,34.936,19.964c2.995,1.497,15.634,15.104,15.472,15.472c-10.624-3.472-33.634-12.767-45.621-15.655   c-6.098-1.47-13.417-2.098-20.375-1.617c-9.097,0.629-17.392,3.24-18.65,3.773c-1.368,0.58-3.741,1.856-2.695,3.019   c9.713,6.822,23.927,12.759,39.428,14.474c12.528,1.386,36.809,4.138,50.277,4.729c2.085,0.092,4.341-0.116,5.929,0.324   c1.057,0.292,14.25,13.28,14.126,13.765c-17.895-3.092-40.236-8.592-60.266-10.316c-18.854-1.622-41.385,0.14-52.533,7.987   c-2.066,1.454-5.998,5.096-3.45,6.468c11.658,5.294,41.847,7.631,62.667,8.722c21.777,1.142,41.93-1.721,57.782-7.654   c7.45,8.182,11.7,13.714,17.798,22.888c-19.789-2.712-39.98-6.436-61.017-7.87c-22.291-1.52-45.36-0.156-62.094,5.714   c-11.386,3.994-32.662,14.672-30.077,15.955c10.174,5.297,23.266,7.331,37.516,7.331c14.618,0,27.779-2.298,40.534-4.312   c13.259-2.093,25.574-3.977,38.809-6.037c11.035-1.718,22.765-3.286,35.36-3.881c1.818-0.085,4.658-0.329,5.713,0   c0.79,0.246,8.233,10.233,9.99,13.664c-20.485-0.285-41.171,3.693-62.322,4.111c-6.967,0.138-13.941,0.133-20.59,0.863   c-22.312,2.449-38.282,11.715-52.824,22.208c-1.959,1.414-4.527,3.358-5.821,4.959c-0.583,0.721-1.725,2.812-1.126,3.082   c11.238,4.246,27.756,2.87,39.612,0.799c12.528-2.188,24.415-5.235,35.898-8.086c23.679-5.878,46.635-17.202,70.407-22.545   c1.749,2.132,4.458,7.204,5.847,9.696c-16.79,5.816-33.927,10.508-47.757,18.973c-13.919,8.52-24.75,19.713-35.575,31.155   c-2.642-2.783-16.423-16.752-17.059-14.378c-0.396,1.595,5.2,17.864,8.111,24.188c-0.848,0.938-2.878,3.229-4.312,4.743   c-6.947-6.205-27.25-24.679-27.465-22.652c-0.499,5.275,14.342,26.077,20.027,35.157c2.976,4.754,6.277,8.476,10.349,11.967   c3.472,2.976,7.343,5.853,10.672,8.839c0.445,0.4,1.208,0.938,1.078,1.294c-1.138-0.408-2.373-0.714-3.773-1.077   c-1.291-0.336-2.971-0.324-4.097-0.863c-0.88-0.422-18.312-22.315-25.563-30.685c-8.741-10.088-17.354-16.366-32.651-19.767   c-2.494-0.503,2.488,7.945,4.851,11.427c10.053,14.804,25.634,24.396,39.672,34.82c0.525,0.39,1.385,0.658,1.293,1.078   c-12.278-4.726-23.481-11.194-37.084-14.984c-6.671-1.859-14.549-3.45-22.639-3.45c-8.229,0-13.016,2.191-19.528,4.312   c-2.22,0.776-1.216,1.651,0,2.695c8.841,7.062,20.144,9.527,34.621,10.888c7.317,0.688,14.799,0.998,21.884,1.94   c7.011,0.932,13.542,2.894,19.728,4.097c-11.314,1.913-22.694,2.483-31.586,6.576c-4.314,1.985-8.009,4.7-11.427,7.653   c-3.325,2.874-7.157,5.975-8.409,10.565c-0.021,1.562,13.813,0.756,19.512-0.755c15.876-4.209,27.697-12.355,41.289-19.189   c1.194-0.6,2.78-1.669,3.666-1.725c1.07-0.067,3.355,0.765,4.527,1.078c1.568,0.419,2.998,0.97,4.42,1.186   c-6.86,2.34-13.516,4.066-19.621,6.684c-18.338,7.865-42.464,27.318-45.362,40.843c-0.357,1.654,26.571-11.107,41.785-20.409   c5.864-3.585,11.798-7.956,16.513-12.671c4.783-4.783,9.999-8.708,16.17-11.858c3.663,1.512,7.725,2.624,11.643,3.881   c-6.688,2.892-13.412,6.103-20.159,9.271c-13.41,6.297-27.184,15.523-35.888,26.669c-4.323,5.536-10.303,19.114-7.449,18.285   c30.753-10.213,55.75-26.178,71.581-51.314c3.413,1.151,8.887,3.359,12.229,4.581c-5.59,4.45-11.563,8.204-17.437,12.345   c-5.888,4.149-12.117,7.798-17.249,12.828c-5.231,5.128-12.104,14.034-15.421,20.743c-3.239,6.551-8.846,15.893-7.541,16.449   c6.869-0.081,26.519-14.063,36.114-25.765c4.535-5.531,27.767-33.754,28.279-33.527c2.924,1.297,5.988,2.887,8.624,4.097   c-8.866,7.808-18.128,14.837-25.118,24.579c-6.94,9.673-22.013,37.613-20.196,39.122c0.525,0.476,15.07-10.89,19.464-14.973   c8.587-7.978,14.202-16.09,19.964-26.951c2.192-4.132,5.426-12.016,8.15-15.74c0.847-1.158,1.652-2.521,2.911-3.343   c23.984,12.726,44.791,28.509,61.663,48.728c0.892,1.068,2.568,3.619,3.45,3.881c0.835,0.249,2.187-0.021,3.233,0   c2.818,0.057,6.064,0.669,8.948,0.539c-1.049-16.474-3.355-36.804-0.442-53.112c5.948,16.224,11.291,34.537,15.966,52.034   c2.049,0.898,5.557,0.337,8.193,0.647c-5.241-21.232-12.623-42.615-20.052-62.526c-0.548-1.469-1.602-3.207-1.51-4.636   c0.239-3.685,1.432-7.97,2.372-11.427c2.876-10.57,6.75-21.105,11.104-30.077c10.311,2.843,17.057,6.418,26.705,9.934   c9.157,3.336,27.804,5.422,35.714,3.11c0.819-0.268-2.296-4.02-4.097-5.498c-1.804-1.48-3.628-2.979-5.606-4.204   c-4.06-2.513-8.739-4.333-13.906-5.714c-10.498-2.806-23.114-2.655-36.329-2.587c0.835-1.896,1.814-3.647,2.91-5.282   c11.625-0.855,21.08,2.529,31.909,2.695c5.516,0.084,14.219-0.389,19.232-0.947c5.183-0.578,17.382-1.905,16.265-4.106   c-2.194-4.01-22.622-7.99-33.771-7.99c-10.925-0.001-20.836,2.403-30.185,4.419c0.816-1.482,1.624-2.975,2.694-4.204   c10.409-1.611,21.488-2.637,30.832-5.39c9.206-2.713,31.189-11.618,29.464-17.264c-0.973-2.607-37.674,7.245-56.51,16.422   C396.618,426.138,401.73,421.354,402.768,420.896z M236.211,482.666c-3.259-5.951-5.706-12.408-8.839-18.326   c-3.15-5.946-7.167-11.002-11.428-15.739c0.979-0.661,2.605-1.573,3.45-2.264c7.599,15.437,20.287,25.78,29,40.103   C244.439,485.075,240.374,483.822,236.211,482.666z M255.508,488.812c-5.287-12.877-9.877-26.993-15.847-39.456   c-1.487-3.103-3.113-6.089-5.175-8.732c-0.623-0.799-1.175-1.532-1.833-2.479c3.39-1.354,6.89-3.172,10.133-4.312   c3.286,22.91,9.676,42.717,20.698,57.89C261.046,490.964,258.083,489.793,255.508,488.812z M356.196,554.14   c-0.453,0.161-0.58-0.446-0.755-0.646c-17.833-20.361-39.795-37.264-65.329-50.021c3.037-12.596,3.84-24.18,4.535-35.055   c0.469-7.351-2.768-16.837-5.49-24.954c-0.436-1.149-3.273,3.139-4.991,5.49c-2.905,3.977-1.794,9.015-2.776,14.786   c-1.371,8.058,0.28,25.64,3.332,37.037c-3.73-1.552-7.309-3.256-10.996-4.851c-2.213-12.921-4.972-25.995-8.84-37.516   c-3.802-11.326-14.631-22.1-20.544-25.273c14.042-5.91,25.773-11.217,36.176-20.327c5.264-4.61,9.516-9.834,14.338-14.554   c4.976-4.871,10.827-8.627,16.817-12.613c0.877,1.063,1.397,2.484,2.155,3.666c-0.988,1.575-2.374,2.864-3.665,4.204   c-9.158,9.508-17.875,19.479-25.98,30.292c-4.483,5.981-8.734,12.491-11.212,20.914c-1.579,5.369-2.954,14.125-1.509,21.345   c0.499,2.495,1.848,5.446,2.919,5.367c1.436-0.106,3.377-2.177,4.519-3.318c8.575-8.575,16.409-17.997,22.962-28.244   c7.814-12.222,13.772-25.437,16.602-41.828c15.676,29.712,27.655,62.579,40.318,95.837c0.448,1.177-2.235,23.185-2.803,30.293   C355.197,533.994,355.558,544.007,356.196,554.14z'></path>
        </svg>
      </Link>
    </div>
    <ul>
      <li>
        <Link activeClassName='active' to='/writing'>
          Writing
        </Link>
      </li>
      <li>
        <Link activeClassName='active' to='/about'>
          About
        </Link>
      </li>
      <li>
        <Link activeClassName='active' to='/contact'>
          Get in Touch
        </Link>
      </li>
    </ul>
    <hr />
    <div>
      © {new Date().getFullYear()} Brett Bloxom - Built with 💜 using <a href='https://www.gatsbyjs.org'>Gatsby</a>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
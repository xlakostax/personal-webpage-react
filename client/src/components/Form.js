// import React, { useEffect, useState } from "react";
//
// /*Import libraries*/
// import axios from "axios";
// import { loadProgressBar } from "axios-progress-bar";
// import dompurify from "dompurify";
// import Modal from "react-modal";
//
// /*Import styles*/
// import "axios-progress-bar/dist/nprogress.css";
// import {Wrapper} from "../styles/styled";
//
// const Form = () => {
//   const [state, setState] = useState({
//     name: "",
//     email: "",
//     info: "",
//     showModal: false,
//     message: "",
//     disabled: false,
//     checked: false,
//   })
//
//   useEffect(() => {
//     loadProgressBar();
//   });
//
//   const onChangeHandler = (event) => {
//     event.preventDefault();
//     let name = event.target.name;
//     let value = event.target.value;
//     // console.log(name, value)
//     // console.log(state.name, state.email, state.checked)
//     setState({
//       ...state,
//       [name]: value /* The ES6 computed property name syntax is used to update the state key corresponding to the given input name:*/
//     });
//   };
//
//   const onSubmitHandler = (event) => {
//     event.preventDefault(); /* Prevent form submit from reloading the page */
//     setState({
//       ...state,
//       disabled: true
//     });
//     let name = state.name;
//     let email = state.email;
//     let message = state.message;
//     let formObj = {
//       name: name,
//       email: email,
//       message: message
//     };
//     let axiosConfig = {
//       /* Config headers to avoid CORS issues */
//       headers: {
//         "Content-Type": "application/json;charset=UTF-8",
//         "Access-Control-Allow-Origin": "*"
//       }
//     };
//
//     axios.post(
//       "https://us-central1-konstantin-veselovskii.cloudfunctions.net/app",
//       formObj,
//       axiosConfig
//     ) /* POST request by axios to the function */
//     .then(res => {
//       if (res.data.msg === "success") {
//         setState({
//           ...state,
//           showModal: true,
//           info: `Your message was sent <span>successfully</span>.`
//         });
//       } else if (res.data.msg === "fail" || res.status !== 200) {
//         setState({
//           ...state,
//           showModal: true,
//           info: `<span>Error.</span> Your message was not sent. Please check your connection or firewall settings.`
//         });
//       }
//     })
//   };
//
//   const resetForm = () => {
//     setState(
//       {name: "",
//       email: "",
//       message: "",
//       showModal: false,
//       info: "",
//       disabled: false,
//       checked: false,}
//     );
//   };
//
//   const handleCloseModal = () => {
//     resetForm();
//   };
//
//   // const onCheckHandler = () => {
//   //   !state.checked ?
//   //   setState({
//   //     ...state,
//   //     checked: true
//   //   }) :
//   //   setState({
//   //     ...state,
//   //     checked: false
//   //   });
//   // };
//
//   const sanitizer = dompurify.sanitize;
//
//   return (
//     <Wrapper className="wrapper">
//       <Modal
//         isOpen={state.showModal}
//         contentLabel="onRequestClose"
//         onRequestClose={handleCloseModal}
//         className="Modal"
//         overlayClassName="Overlay"
//         shouldCloseOnOverlayClick={false}
//       >
//         <i
//           className="fas fa-times"
//           onClick={handleCloseModal}
//           style={{ cursor: "pointer", marginRight: "1rem" }}
//         />
//         <p dangerouslySetInnerHTML={{ __html: sanitizer(state.info) }} />
//       </Modal>
//       <form onSubmit={onSubmitHandler}>
//         <p>
//           <label>
//             Your name:
//             <input
//               id="name"
//               type="text"
//               name="name"
//               value={state.name}
//               onChange={onChangeHandler}
//               required
//             />
//           </label>
//         </p>
//         <p>
//           <label>
//             Your email:
//             <input
//               id="email"
//               type="email"
//               name="email"
//               value={state.email}
//               onChange={onChangeHandler}
//               required
//             />
//           </label>
//         </p>
//         <p>
//           <label>
//             Message:
//             <textarea
//               id="message"
//               type="text"
//               name="message"
//               value={state.message}
//               onChange={onChangeHandler}
//               required
//             />
//           </label>
//         </p>
//         {/* <div>
//           <label>
//             <input
//               id="checkbox"
//               type="checkbox"
//               checked={state.checked}
//               onChange={onCheckHandler}
//               required
//             />
//             <span></span>
//           </label>
//           <p>I have read and accepted the <Link to="/policy">Privacy Policy</Link></p>
//         </div> */}
//         <div>
//           <button type="submit" name="send" disabled={state.disabled}>
//             Send
//           </button>
//         </div>
//       </form>
//     </Wrapper>
//   );
// }
// export default Form;

import React, { useEffect, useState } from "react";

/*Import libraries*/
import axios from "axios";
import { loadProgressBar } from "axios-progress-bar";
import dompurify from "dompurify";
import { useForm } from "react-hook-form";
import Modal from "react-modal";

/*Import styles*/
import "axios-progress-bar/dist/nprogress.css";
import {Wrapper} from "../styles/styled";

const Form = () => {
  const [state, setState] = useState({
    showModal: false,
    message: "",
    disabled: false,
    checked: false,
  })

  const { register, handleSubmit, errors, reset } = useForm();

  useEffect(() => {
    loadProgressBar();
  });

  const onSubmit = (data) => {
    setState({
      ...state,
      disabled: true
    });
    let name = data.name;
    let email = data.email;
    let message = data.message;
    let formObj = {
      name: name,
      email: email,
      message: message
    };
    let axiosConfig = {
      /* Config headers to avoid CORS issues */
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*"
      }
    };

    axios.post(
      "https://us-central1-konstantin-veselovskii.cloudfunctions.net/app",
      formObj,
      axiosConfig
    ) /* POST request by axios to the function */
    .then(res => {
      if (res.data.msg === "success") {
        setState({
          ...state,
          showModal: true,
          message: `Your message was sent <span>successfully</span>.`
        });
      } else if (res.data.msg === "fail" || res.status !== 200) {
        setState({
          ...state,
          showModal: true,
          message: `<span>Error.</span> Your message was not sent. Please check your connection or firewall settings.`
        });
      }
    })
  };

  const resetForm = () => {
    setState(
      {
        showModal: false,
        message: "",
        disabled: false,
        checked: false,
      }
    );
    reset();
  };

  const handleCloseModal = () => {
    resetForm();
  };

  const sanitizer = dompurify.sanitize;

  return (
    <Wrapper className="wrapper">
      <Modal
        isOpen={state.showModal}
        contentLabel="onRequestClose"
        onRequestClose={handleCloseModal}
        className="Modal"
        overlayClassName="Overlay"
        shouldCloseOnOverlayClick={false}
      >
        <i
          className="fas fa-times"
          onClick={handleCloseModal}
          style={{ cursor: "pointer", marginRight: "1rem" }}
        />
        <p dangerouslySetInnerHTML={{ __html: sanitizer(state.message) }} />

      </Modal>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Your name:
          <input name="name" type="text" ref={register({ required: true })} />
        </label>
        <label>
          Your email:
          <input name="email" type="email" ref={register({ required: true })} />
        </label>
        <label>
          Message:
          <textarea name="message" type="text" ref={register({ required: true })} />
        </label>
        <div>
          <button name="send" type="submit" disabled={state.disabled}>
            Send
          </button>
        </div>
        {(errors.name || errors.email || errors.message) && <span>This field is required</span>}
      </form>
    </Wrapper>
  );
}
export default Form;
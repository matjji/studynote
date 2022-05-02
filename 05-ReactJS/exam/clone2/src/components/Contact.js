import React from "react";
import styled from "styled-components"

import data from "../data"

const ContactBox = styled.div`
    margin-left: 15px;

    .contact_content {
        padding: 8px 16px 0px 16px;
        & > p {
            margin: 15px 0;
        }

        form {
            width: 100%
        }

        & > form > p {
            margin: 16px 0;
            &:first-child {
                margin: 0;
            }
        }

        input {
            display: block;
            width: 100%;
            border: 1px solid #ccc;
            padding: 8px 0;
            &::placeholder {
                font-size: 15px;
            }
        }
        button {
            font-size: 15px;
            border:none;
            background-color: black;
            color: white;
            padding: 10px 16px;
            margin: 24px 0;
        }
    }
    .map_img {
        width: 100%
    }
`

const Contact = () => {
    return(
        <ContactBox>
            <div className="contact_content">
                <p>Lets get in touch and talk about your next project.</p>
                <form>
                <p>
                    <input
                    type="text"
                    name="Name"
                    id="name"
                    required
                    placeholder="Name"
                    />
                </p>
                <p>
                    <input
                    type="email"
                    nmae="Email"
                    placeholder="Email"
                    required
                    id="email"
                    />
                </p>
                <p>
                    <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                    id="subject"
                    />
                </p>
                <p>
                    <input
                    type="text"
                    name="commnet"
                    placeholder="Comment"
                    required
                    id="commnet"
                    />
                </p>
                <p>
                    <button type="submit">
                    <i>SEND MESSAGE</i>
                    </button>
                </p>
                </form>
                <div>
                <img className="map_img" src={data.map.img} alt="Map" />
                </div>
            </div>
        </ContactBox>
    )
}

export default Contact;
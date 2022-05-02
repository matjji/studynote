/** 패키지 참조 */
import React from "react";
import styled from "styled-components"

const ContactBox = styled.div`
    padding: 64px 16px;
    
    h1 {
        font-size: 36px;
        margin: 10px 0;
    }

    .contact_p-diff {
        margin: 18px 0;
        font-size: 18px !important;
        color: #607d8b;
        font-weight: bolder;
    }

    p {
        margin: 15px 0;
        font-size: 15px;
    }

    input {
        border: none;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        padding: 16px 8px;
        display: block;
        width: 100%;
        height: 24px;
        font-weight: 400;
        font: inherit;
    }

    button {
        border: none;
        padding: 8px 16px;
        font-family: "Playfair Display";
        margin: 16px 0;
        font-weight: 400;
        font-size: 14px;
        font: inherit;

        &:hover {
            background-color: #cccccc;
            cursor: pointer;
        }
    }
`

const Contact = () => {
    return(
        <ContactBox>
            <h1>Contact</h1>
            <br />
            <p>
            We offer full-service catering for any event, large or small. We
            understand your needs and we will cater the food to satisfy the
            biggerst criteria of them all, both look and taste. Do not hesitate to
            contact us.
            </p>

            <p className="contact_p-diff">
            <b>Catering Service, 42nd Living St, 43043 New York, NY</b>
            </p>

            <p>
            You can also contact us by phone 00553123-2323 or email
            catering@catering.com, or you can send us a message here:
            </p>

            <form>
            <p>
                <input type="text" placeholder="Name" required name="Name" />
            </p>

            <p>
                <input
                type="number"
                placeholder="How many people"
                required
                name="People"
                />
            </p>

            <p>
                <input
                type="datetime-local"
                placeholder="Date and time"
                required
                name="date"
                value="2020-11-16T20:00"
                />
            </p>

            <p>
                <input
                type="text"
                placeholder="Message \ Special requirements"
                required
                name="Message"
                />
            </p>

            <p>
                <button type="submit">SEND MESSAGE</button>
            </p>
            </form>
        </ContactBox>
    )
}

export default Contact;
import React from "react";
import confirm from '../images/confirm.jpg'
import {Image} from "@chakra-ui/react";

const ConfirmBooking = () => (
    <section className="confirm">
        <h1>Thank you for submitting! We will see you soon!</h1>
        <Image src={confirm} alt="confirmation" height="100%" width="40%"/>
    </section>
)

export default ConfirmBooking;
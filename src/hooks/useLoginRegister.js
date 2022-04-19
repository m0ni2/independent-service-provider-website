import { useState } from "react";

const useLoginRegister = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        setValidated(true);
    };

    return {
        validated,
        setValidated,
        handleSubmit

    }
}

export default useLoginRegister;
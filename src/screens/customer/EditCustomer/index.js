import React from "react";
import { useRoute } from "@react-navigation/native";
import { useEditCustomer } from "../../../features/customer/hooks";
import Form from "../../../features/customer/components/Form";

const Edit = () => {
    const { params } = useRoute();
    const { customerID } = params;
    const { status, onSubmit } = useEditCustomer(customerID);

    return (
        <Form handleSubmit={onSubmit} status={status} customerID={customerID} />
    );
};

export default Edit;

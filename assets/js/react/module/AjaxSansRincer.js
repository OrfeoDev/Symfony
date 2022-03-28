import React, {useEffect, useState} from "react";

export default function AjaxSansRincer()
{
    let [image, setImage] = useState('');

    async function ajax()
    {
        let response = await fetch("/react/ajaxSansRincerBis");

        if (response.ok) {
            setImage(await response.json());
        } else {
            setImage(response.status);
        }
    }

    useEffect(ajax);

    return <>
        <h1>AjaxSansRinceRoot</h1>
        {image}
    </>
}
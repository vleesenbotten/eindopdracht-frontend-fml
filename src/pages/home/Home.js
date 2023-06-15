import React from 'react';
import Button from "../../components/button/Button";
import Countdown from "../../components/Countdown";

function Home() {
    return (
        <>
            <h1>Welcome to the gunshow</h1>
            <p>*kisses biceps*</p>
            <p>Is this where the magic happens?</p>
            <section>
                <h1>Latest news</h1>
                <article>
                  <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aut beatae commodi cum cumque deleniti dicta dolor dolorem eius enim error eum eveniet ex incidunt ipsa iste iusto minima modi nam natus nihil, nobis odit officiis optio quasi quis quisquam quo ratione reprehenderit saepe similique sint soluta, sunt tenetur, ullam vel veniam. A aliquam animi architecto asperiores atque beatae deserunt, eaque, eligendi, error ex exercitationem fugit harum hic id incidunt inventore ipsam iusto magnam maiores minima minus natus nostrum numquam obcaecati odio officia possimus quidem ratione sapiente sequi sint suscipit tempora voluptate? A accusantium amet at, cumque, deserunt explicabo illo, iusto omnis quia quisquam quo repudiandae! Accusamus aliquid cumque neque possimus rem. Accusantium consequatur dolor eaque est, eum exercitationem id nulla placeat quasi qui quis repellendus rerum similique! Aliquam architecto consectetur, deleniti deserunt eius eveniet id, illum incidunt molestiae quos saepe sint temporibus tenetur. Aliquam dicta illo modi nam saepe?
                  </p>
                </article>
                <article>
                    <h2>Starfield</h2>
                    <h3>Countdown</h3>
                    <Countdown/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad debitis deserunt iste mollitia odit quia soluta voluptatibus. Animi perspiciatis, voluptatum?</p>
                </article>
            </section>
        </>
    );
}

export default Home;
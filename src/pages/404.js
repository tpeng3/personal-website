import React from "react"
import Layout from "../components/layout"
import Fade from 'react-reveal/Fade';

export default () => (
    <Layout childKey={"404"}>
        <div className="text-center py-4">
        <h2>Page not found</h2>
        <h3>Whoops! It looks like this page doesn't exist... yet.</h3>

        </div>
    </Layout>
)
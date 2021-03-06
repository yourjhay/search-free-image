import React from 'react'
import { Layout } from 'antd';

const Footer = (props) => {
    const { Footer } = Layout;
    return (
        <div>
            <Footer style={{ textAlign: 'center' }}>{props._text}</Footer>
        </div>
    )
}

Footer.defaultProps = {
    _text: 'Default Footer Text',
}

export default Footer

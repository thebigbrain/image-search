/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, {
    PropTypes
} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.scss';
import Webcam from 'react-webcam';

const title = 'Image Search';

function Home({
    placeholder
}, context) {
    context.setTitle(title);
    return (
        <form className={s.root}>
            <input placeholder={placeholder} className={s.input}/>
            <div className={s.container}>
                <Webcam/>
            </div>
        </form>
    );
}

Home.propTypes = {
    placeholder: PropTypes.string,
};
Home.contextTypes = {
    setTitle: PropTypes.func.isRequired
};

export default withStyles(s)(Home);
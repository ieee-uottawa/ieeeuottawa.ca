import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Carousel, { Modal, ModalGateway } from 'react-images';
import Gallery from 'react-photo-gallery';
import { Button, GridList } from '../../helpers/material-ui';
import { Title } from '../../helpers/components';
import { srcArray } from '../../helpers/gallery';
import { translate } from '../../helpers/translation';
import { isServerSideRendering } from '../../util';

const photos = () => {
    const arr = [];
    if (isServerSideRendering()) return arr;
    for (let i = 131; i >= 1; i -= 1) {
        // eslint-disable-next-line global-require eslint-disable-next-line import/no-dynamic-require
        const src = require(`../../../static/images/gallery/0${String(i)}.jpg`);
        let width = i + 3;
        let height = i + 4;
        if (i === 9) {
            width = 5;
            height = 4;
        }
        arr.push({ src, width, height });
    }
    return arr;
};

const query = graphql`
    query {
        allGalleryJson {
            nodes {
                image {
                    childImageSharp {
                        fixed(width: 186, height: 186) {
                            ...GatsbyImageSharpFixed_withWebp
                        }
                    }
                }
            }
        }
    }
`;

class IEEEGallery extends Component {
    render() {
        return (
            <StaticQuery
                query={query}
                render={({ allGalleryJson: { nodes } }) => {
                    return (
                        <div className="center-horizontal">
                            <Title variant="h5" gutterBottom className="title">
                                {translate('Gallery')}
                            </Title>
                            <GridList cols={5} style={{ margin: '0 5.0% 0' }}>
                                <Gallery photos={photos()} />;
                            </GridList>
                        </div>
                    );
                }}
            />
        );
    }
}
export default IEEEGallery;

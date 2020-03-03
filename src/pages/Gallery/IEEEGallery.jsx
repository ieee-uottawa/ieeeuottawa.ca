import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Carousel, { Modal, ModalGateway } from 'react-images';
// import Gallery from 'react-photo-gallery';
import { Button, GridList } from '../../helpers/material-ui';
import { Title } from '../../helpers/components';
import { srcArray } from '../../helpers/gallery';
import { translate } from '../../helpers/translation';
import { isServerSideRendering } from '../../util';

// const photos = () => {
//     let arr = [];
//     if (isServerSideRendering()) return arr;
//     for (let i = 9; i >= 1; i--) {
//         const src = require(`../../assets/progress/${String(i)}.jpg`);
//         let width = i + 3;
//         let height = i + 4;
//         if (i == 9) {
//             width = 5;
//             height = 4;
//         }
//         arr.push({ src, width, height });
//     }
//     return arr;
// };

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
    constructor(props) {
        super(props);
        this.state = { modalIsOpen: false };
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        const { modalIsOpen } = this.state;
        this.setState({ modalIsOpen: !modalIsOpen });
    }

    render() {
        return (
            <StaticQuery
                query={query}
                render={({ allGalleryJson: { nodes } }) => {
                    const { modalIsOpen } = this.state;
                    return (
                        <div className="center-horizontal">
                            <Title variant="h5" gutterBottom className="title">
                                {translate('Gallery')}
                            </Title>
                            <Button onClick={this.toggleModal}>
                                {translate('Open Preview')}
                            </Button>
                            <GridList cols={5} style={{ margin: '0 5.0% 0' }}>

                            </GridList>
                            <ModalGateway>
                                {modalIsOpen && (
                                    <Modal onClose={this.toggleModal}>
                                        <Carousel
                                            onClick={this.toggleModal}
                                            views={srcArray}
                                        />
                                    </Modal>
                                )}
                            </ModalGateway>
                        </div>
                    );
                }}
            />
        );
    }
}
export default IEEEGallery;

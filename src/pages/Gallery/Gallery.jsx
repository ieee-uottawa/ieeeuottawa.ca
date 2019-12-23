import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { Button, GridList } from '../../helpers/material-ui';
import { GalleryCard, Title } from '../../helpers/components';
import { srcArray } from '../../helpers/gallery';

const archives = src => {
    const blacklist = new Set(['0121.jpg', '0123.jpg']);
    for (let item = 0; item < blacklist.length; item += 1) {
        if (String(src).includes(blacklist[item])) return true;
    }
    return false;
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

class Gallery extends Component {
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
                                Gallery
                            </Title>
                            <Button onClick={this.toggleModal}>
                                Open Preview
                            </Button>
                            <GridList cols={5} style={{ margin: '0 5.0% 0' }}>
                                {nodes.map(({ image }, key) => {
                                    const { childImageSharp } = image;
                                    const { fixed } = childImageSharp;
                                    const { src } = fixed;
                                    if (!archives(src))
                                        return (
                                            <GalleryCard
                                                image={image}
                                                key={String(key)}
                                            />
                                        );
                                    return undefined;
                                })}
                            </GridList>
                            <ModalGateway>
                                {modalIsOpen ? (
                                    <Modal onClose={this.toggleModal}>
                                        <Carousel
                                            onClick={this.toggleModal}
                                            views={srcArray}
                                        />
                                    </Modal>
                                ) : null}
                            </ModalGateway>
                        </div>
                    );
                }}
            />
        );
    }
}
export default Gallery;

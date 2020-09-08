import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { Button, GridList } from '../../helpers/material-ui';
import { GalleryCard, Title } from '../../helpers/components';
import { getPhotos } from '../../helpers/gallery';
import { translate } from '../../helpers/translation';

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
                query={graphql`
                    query {
                        allGalleryJson {
                            nodes {
                                image {
                                    childImageSharp {
                                        fixed(width: 240, height: 240) {
                                            ...GatsbyImageSharpFixed_withWebp
                                        }
                                    }
                                }
                            }
                        }
                    }
                `}
                render={({ allGalleryJson: { nodes } }) => {
                    const photos = getPhotos(nodes);
                    const { modalIsOpen } = this.state;
                    return (
                        <div className='center-horizontal'>
                            <Title variant='h5' gutterBottom className='title'>
                                {translate('Gallery')}
                            </Title>
                            <Button onClick={this.toggleModal}>
                                {translate('Open Preview')}
                            </Button>
                            <GridList cols={5} style={{ margin: '0 5.0% 0' }}>
                                {photos.map(({ image, src }) => (
                                    <GalleryCard
                                        image={image}
                                        key={String(src)}
                                    />
                                ))}
                            </GridList>
                            <ModalGateway>
                                {modalIsOpen && (
                                    <Modal onClose={this.toggleModal}>
                                        <Carousel
                                            onClick={this.toggleModal}
                                            views={getPhotos(nodes)}
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
export default Gallery;

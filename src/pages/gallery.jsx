import React, { Component } from 'react';
import { GridList } from '@material-ui/core';
import { graphql, StaticQuery } from 'gatsby';
import Title from '../components/title';
import { GalleryCard } from '../components/cards';
// import Carousel, { Modal, ModalGateway } from 'react-images';

const archives = (src) => {
  const blacklist = new Set(["0121.jpg", "0123.jpg"]);
  for (const item of blacklist) if (String(src).includes(item)) return true;
  return false;
}

const Gallery = () => (
  <StaticQuery
    query={
      graphql`
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
      `
    }
    render={({ allGalleryJson: { nodes } }) => {
      let srcArray = [];
      for (const item of nodes) {
        const current = item.image.childImageSharp.fixed.src;
        srcArray.push(current);
      }
      console.log(srcArray[0]);
      return (<div className="center-horizontal">
        <Title variant="h5" gutterBottom className="title">Gallery</Title>
        <GridList cols={5} style={{ margin: '0 5.0% 0' }}>
          {nodes.map(({ image }) => {

            const src = image.childImageSharp.fixed.src;
            if (!archives(src))
              return <GalleryCard image={image} />
          })}
        </GridList>
      </div>)
    }}
  />
);

// class Gallery extends React.Component {

//   state = { modalIsOpen: true };
//   toggleModal = () => {
//     this.setState(state => ({ modalIsOpen: !state.modalIsOpen }));
//   };

//   render() {
//     // /static/9fc123603bb08ccec1429e54d80e419b/0efc5/0131.jpg
//     const { modalIsOpen } = this.state;
//     const images = [{ src: '/static/9fc123603bb08ccec1429e54d80e419b/0efc5/0131.jpg' }, { src: '../../static/images/gallery/01.jpg' }];
//     return (
//       <ModalGateway>
//         {modalIsOpen ? (
//           <Modal onClose={this.toggleModal}>
//             <Carousel views={images} />
//           </Modal>
//         ) : null}
//       </ModalGateway>
//     );
//   }
// }

export default Gallery;

import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Snackbar from '@material-ui/core/Snackbar';
import { graphql, StaticQuery } from 'gatsby';
import dayjs from 'dayjs';
import ProductCard from '../../components/Cards/ProductCard/ProductCard';
import Title from '../../components/Titles/Title';
import Link from '../../components/Routers/Link';
import '../../components/Cards/ProductCard/product-card.scss';
import { capitalize } from '../../utils/util';

class Shop extends Component {
    constructor(props) {
        super(props);

        this.messageQueue = [];
        this.state = {
            showSnackbar: false,
            messageInfo: {}
        };

        this.onAddToCart = this.onAddToCart.bind(this);
        this.processQueue = this.processQueue.bind(this);
        this.handleSnackbarExit = this.handleSnackbarExit.bind(this);
        this.handleSnackbarClose = this.handleSnackbarClose.bind(this);
    }

    onAddToCart({ key, name, options, quantity, price }) {
        this.messageQueue.push({
            message: `Added ${quantity} x ${name} (${Object.keys(options)
                .filter(
                    option =>
                        price.length > 1 ||
                        (price.length === 1 && option !== 'quantity')
                )
                .map(key2 => `${capitalize(key2)}: ${options[key2]}`)
                .join(', ')})`.replace(' ()', ''),
            key
        });
        const { showSnackbar } = this.state;
        if (showSnackbar) {
            this.setState({ showSnackbar: false });
        } else {
            this.processQueue();
        }
    }

    processQueue() {
        if (this.messageQueue.length > 0) {
            this.setState({
                messageInfo: this.messageQueue.shift(),
                showSnackbar: true
            });
        }
    }

    handleSnackbarClose() {
        this.setState({ showSnackbar: false });
    }

    handleSnackbarExit() {
        this.processQueue();
    }

    render() {
        const { showSnackbar, messageInfo } = this.state;
        return (
            <StaticQuery
                query={graphql`
                    query {
                        allShopJson {
                            edges {
                                node {
                                    name
                                    price {
                                        quantity
                                        price
                                    }
                                    expiry
                                    image {
                                        childImageSharp {
                                            resolutions(width: 276) {
                                                ...GatsbyImageSharpResolutions
                                            }
                                        }
                                    }
                                    options {
                                        size
                                        colour
                                    }
                                }
                            }
                        }
                    }
                `}
                render={({ allShopJson: { edges } }) => (
                    <div
                        style={{
                            marginLeft: '16px',
                            marginRight: '16px'
                        }}
                    >
                        <Title variant="h5" gutterBottom className="title">
                            Shop
                        </Title>
                        <GridList style={{ justifyContent: 'space-evenly' }}>
                            {edges
                                .filter(
                                    ({ node: { expiry } }) =>
                                        !expiry ||
                                        (expiry &&
                                            dayjs(new Date()).isBefore(
                                                dayjs(expiry).add(1, 'day')
                                            ))
                                )
                                .map(
                                    ({
                                        node: {
                                            name,
                                            price,
                                            expiry,
                                            image,
                                            options
                                        }
                                    }) => (
                                        <GridListTile
                                            style={{
                                                width: 'inherit',
                                                height: 'inherit',
                                                padding: 'inherit',
                                                flexDirection: 'column',
                                                alignSelf: 'center'
                                            }}
                                        >
                                            <ProductCard
                                                price={price}
                                                name={name}
                                                expiry={expiry}
                                                imageURL={image}
                                                options={options}
                                                itemCount={1}
                                                onAddToCart={this.onAddToCart}
                                            />
                                        </GridListTile>
                                    )
                                )}
                        </GridList>
                        <Snackbar
                            key={messageInfo.key}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left'
                            }}
                            open={showSnackbar}
                            autoHideDuration={2000}
                            onClose={this.handleSnackbarClose}
                            onExited={this.handleSnackbarExit}
                            ContentProps={{
                                'aria-describedby': 'message-id'
                            }}
                            message={
                                <span id="message-id">
                                    {messageInfo.message}
                                </span>
                            }
                            action={
                                // eslint-disable-next-line react/jsx-wrap-multilines
                                <Button
                                    component={Link}
                                    to="/cart"
                                    style={{ color: 'white' }}
                                >
                                    Go to cart
                                </Button>
                            }
                        />
                    </div>
                )}
            />
        );
    }
}

export default Shop;

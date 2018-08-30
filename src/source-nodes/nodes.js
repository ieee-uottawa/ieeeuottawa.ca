import createNodeHelpers from 'gatsby-node-helpers';

// Node prefix
const TYPE_PREFIX = 'IEEE';

// Node types
const NAV_ITEM = 'NavItem';

const { createNodeFactory, generateNodeId } = createNodeHelpers({
  typePrefix: TYPE_PREFIX,
});

export const NavItemNode = _imageArgs => createNodeFactory(NAV_ITEM);

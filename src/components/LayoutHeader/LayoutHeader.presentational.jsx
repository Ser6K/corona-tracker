import React from 'react';
import PropTypes from 'prop-types';
import {
    Header,
    Text,
    Left,
    Right,
    Picker,
    Icon,
    Item,
    Input,
} from 'native-base';

const LayoutHeaderPresentational = ({
    searchQuery,
    sortingOption,
    onSearchChange,
    onSortingChange,
}) => (
    <Header searchBar rounded>
        <Picker
            mode="dropdown"
            onValueChange={onSortingChange}
            iosHeader="Order by"
            iosIcon={<Icon name="arrow-down" />}
            selectedValue={sortingOption}
        >
            <Picker.Item label="Total" value="total" />
            <Picker.Item label="Deaths" value="deaths" />
            <Picker.Item label="Recoveries" value="recoveries" />
            <Picker.Item label="Remaining cases" value="remaining" />
        </Picker>
        <Item>
            <Icon name="ios-search" />
            <Input
                placeholder="Search"
                value={searchQuery}
                onChange={onSearchChange}
            />
        </Item>
    </Header>
);

LayoutHeaderPresentational.propTypes = {
    searchQuery: PropTypes.string.isRequired,
    sortingOption: PropTypes.string.isRequired,
    onSearchChange: PropTypes.func.isRequired,
    onSortingChange: PropTypes.func.isRequired,
};

LayoutHeaderPresentational.displayName = 'LayoutHeaderPresentational';
export default React.memo(LayoutHeaderPresentational);

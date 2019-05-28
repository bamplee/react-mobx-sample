import React, {Component} from 'react';
import {Input} from 'antd';
import {inject, observer} from 'mobx-react';

// @inject - mobx store DI
// @observer - mobx observable state 를 rerendring 하기위해 선언
@inject('searchStore')
@observer
class SearchInput extends Component {
    render() {
        const {searchStore} = this.props;
        return (
            <React.Fragment>
                <Input.Search
                    style={{padding: 10}}
                    size="large"
                    placeholder="검색"
                    defaultValue={searchStore.value}
                    value={searchStore.value}
                    onChange={e => searchStore.handleValue(e.target.value)}
                    onSearch={value => searchStore.search(value)}
                />
            </React.Fragment>
        )
    }
}

export default SearchInput;

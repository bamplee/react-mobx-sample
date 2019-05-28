import React, {Component} from 'react';
import {Button, List} from 'antd';
import {inject, observer} from 'mobx-react';

// @inject - mobx store DI
// @observer - mobx observable state 를 rerendring 하기위해 선언
@inject('searchStore')
@observer
class SearchList extends Component {
    render() {
        const {searchStore} = this.props;
        return (
            <List
                style={{padding: 10}}
                dataSource={searchStore.list}
                renderItem={(item, idx) => (
                    <List.Item key={idx}>
                        <List.Item.Meta
                            title={item.name}
                            description={item.name}
                        />
                        <Button onClick={() => {
                            searchStore.handleValue(item.name)
                        }}>선택</Button>
                        <Button onClick={() => {
                            searchStore.removeList(item.name)
                        }}>삭제</Button>
                    </List.Item>
                )}
            >
                <List.Item>
                    <List.Item.Meta title={searchStore.valueWithListSize}/>
                </List.Item>
            </List>
        )
    }
}

export default SearchList;

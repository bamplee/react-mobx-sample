import {observable, action, computed} from 'mobx';
import {api} from '../api'
import {asyncAction} from "mobx-utils";

// mobx에서의 store - global한 state, business 로직을 가짐
class SearchStore {

    // @observable - mobx에서 rerendering 대상 state 값을 지정
    @observable value = '';
    @observable list = [];

    // @action - @observable 지정된 property의 변경은 @action 메소드에서만 가능
    @action removeList = (name) => {
        this.list = this.list.filter(x => x.name !== name);
    };

    @action handleValue = (value) => {
        this.value = value;
    };

    // 비동기인 경우 @action 대신 @asyncAction
    @asyncAction
    async* search(query) {
        this.list = yield api.search(query).then(res => res.data.data);
    };

    // @computed - 비즈니스 로직이 포함된 getter, @computed 데코레이터는 값의 변경이 있을때만 rerendering
    @computed get valueWithListSize() {
        return 'value : ' + this.value + ' size : ' + this.list.length;
    }
}

export default new SearchStore();
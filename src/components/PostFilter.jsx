import React from 'react';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        placeholder='Поиск'
        value={filter.query}
        onChange={(e) => {
          console.log(e.target.value);
          setFilter({ ...filter, query: e.target.value });
          // console.log(filter);
          console.log(filter.query);
        }}
      />
      <MySelect
        value={filter.sort}
        onChange={(selectedSort) => setFilter({ ...filter, sort: selectedSort })}
        defaultValue='Сортировка'
        options={[
          { value: 'title', name: 'По названию' },
          { value: 'body', name: 'По описанию' },
          { value: 'id', name: 'По дате добавления' },
        ]}
      />
    </div>
  );
};

export default PostFilter;

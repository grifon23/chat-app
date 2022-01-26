import moment from 'moment';
import React, {FC, useState} from 'react';
import {View} from 'react-native';
import {Agenda} from 'react-native-calendars';
import {Cards} from './cardsList';

const timeToString = (time: number) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

export const Calendars: FC = ({cards}) => {
  const [items, setItems] = useState({});

  const [selected, setSelected] = useState(moment().format().toString());
  const loadItems = (day: {timestamp: number}) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);

        if (!items) {
          items[strTime] = [];

          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
              day: strTime,
            });
          }
        }
      }

      const newItems = {};
      Object.keys(items).forEach(key => {
        newItems[key] = items[key];
      });
      setItems({
        items: newItems,
      });
    }, 1000);
  };

  return (
    <View style={{height: '90%'}}>
      <Agenda
        style={{}}
        items={cards}
        loadItemsForMonth={day => loadItems(day)}
        selected={selected}
        // onCalendarToggled={calendarOpened => {
        //   console.log(calendarOpened);
        // }}

        //   showClosingKnob={true}
      />
    </View>
  );
};

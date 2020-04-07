import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import { PRIMARY_COLOR } from '../constants/themes';
import AppTextBold from "./custom_ui/AppTextBold";
import { DetailsContext } from "../context/details/DetailsContext";

const Quote = ({ quote, onOpen, init }) => {
  const {
    itemsPerPage,
    startIndex,
    lastIndex
  } = useContext(DetailsContext);

  return (
    <TouchableOpacity onPress={() => {
      onOpen(quote);
      init({startIndex: startIndex, lastIndex: lastIndex, itemsNumber: itemsPerPage})
    }}>
      <View style={styles.quote}>
        <AppTextBold style={{fontSize: 26}}>{quote.symbol}</AppTextBold>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  quote: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: PRIMARY_COLOR,
    borderRadius: 5,
    marginBottom: 10,
    flex: 1
  },
});

Quote.propTypes = {
  quote: PropTypes.object,
  onOpen: PropTypes.func,
  init: PropTypes.func,
};

export default Quote;
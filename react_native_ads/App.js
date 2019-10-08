import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, Button, StyleSheet} from 'react-native';
import {
  AdMobBanner,
  AdMobInterstitial,
  AdMobRewarded,
} from 'react-native-admob';

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const countRewards = () => setCount(count + 10);

    AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712');
    AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
    AdMobRewarded.setAdUnitID('ca-app-pub-3940256099942544/5224354917');
    AdMobRewarded.addEventListener('videoCompleted', countRewards);
    return () => {
      AdMobRewarded.removeEventListener('videoCompleted', countRewards);
    };
  }, [count]);

  const showInterstitial = () => {
    AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd());
  };

  const showRewarded = () => {
    AdMobRewarded.requestAd().then(() => AdMobRewarded.showAd());
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.buttonWrapper}>
          <Button
            title="Show an interstitial"
            onPress={() => showInterstitial()}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            title="Show a rewarded video"
            onPress={() => showRewarded()}
          />
        </View>
        <View style={styles.textWrapper}>
          <Text>Rewarded count: {count}</Text>
        </View>
      </View>
      <View style={styles.bannerWrapper}>
        <AdMobBanner
          adSize="banner"
          adUnitID="ca-app-pub-3940256099942544/6300978111"
          testDevices={[AdMobBanner.simulatorId]}
          onAdFailedToLoad={error => console.error(error)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 15,
  },
  wrapper: {
    flex: 11,
  },
  buttonWrapper: {
    margin: 20,
  },
  textWrapper: {
    marginVertical: 20,
    marginHorizontal: 50,
  },
  bannerWrapper: {
    flex: 1,
    alignItems: 'center',
  },
});

export default App;

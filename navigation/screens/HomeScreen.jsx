import React from 'react'
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { Feather,Ionicons, AntDesign, FontAwesome5, FontAwesome, Entypo } from '@expo/vector-icons';


const HomeScreen = () => {
  return (
    <View style={styles.homeContainer}>
        <View style={styles.homeHeaderContainer}>
          <View style={styles.homeContainerName}>
            <Text
              style={styles.homeContainerName}
            >
              Yo! Micheal
            </Text>
            <View
              style={styles.homeContainerNameBar}
            >
              <View style={styles.homeContainerNameBar1}
              />
              <View style={styles.homeContainerNameBar2}
              />
            </View>
          </View>
          <View
            style={styles.homeContainerNotification}
          >
            <Feather 
              name="headphones" 
              size={24} 
              color="gray" 
            />
            <Ionicons 
              name="notifications" 
              size={24} 
              color="#1bf547"
            />
          </View>
        </View>

        <View>
          <LinearGradient
              
              colors={['#427ddb', '#1bf547']}
              start={{x:0, y:0}}
              end={{x:1.5,y:1}}
              style={styles.cardBalance}
            >
          <View
            style={styles.cardBalanceArrow}
          >
            <AntDesign
              name="arrowright" 
              size={24} 
              color="black" 
            />
          </View>
          <View
            style={{marginTop: 15}}
          >

            <Text 
              style={styles.cardBalanceText}
            >
              KWIKEE CARD BALANCE
            </Text>
            <Text 
              style={styles.cardBalancePrice}
            >
              N 300,782
            </Text>
            <View
              style={{width: '35%', marginTop: 6}}
            >
            <Button
              title='WITHDRAW'
              color={'#1bf547'}
            />
            </View>
            
          </View>
          </LinearGradient>
        </View>

        <View>
          <ScrollView
            bounces={false}
            horizontal={true}
          >
            <View style={styles.cardListContainer}>
            <View style={styles.cardGoal}>
              <View style={styles.cardGoalTarget}>
                <Feather 
                  name="target" 
                  size={24} 
                  color="#427ddb" 
                />
                <Text style={styles.cardGoalTargetText}>Goals</Text>
              </View>
              <View>
                <Text>Vehicle</Text>
                <Text style={styles.cardGoalPrice}>N300,782</Text>
              </View>
              <View style={styles.cardGoalBar}>
                <View
                  style={{
                    width: '25%', 
                    backgroundColor: '#1bf547', 
                    height: 6, 
                    borderRadius: 12
                  }}
                />
              </View>
              <Text style={{fontSize: 10}}>Message in 320 days</Text>
            </View>

            <View style={styles.cardCredit}>
                <View style={styles.cardCreditBill}>
                  <FontAwesome5 
                    name="money-bill" 
                    size={40} 
                    color="#427ddb" 
                  />
                </View>
                <View style={styles.cardBalanceArrow}>
                  <AntDesign
                    name="arrowright" 
                    size={24} 
                    color="black" 
                  />
                </View>
                <View>
                  <Text style={{fontSize: 20, fontWeight: 'bold'}}>Apply for Credit</Text>
                </View>

                <View style={{marginTop: 5}}>
                  <Text>
                    Reach your goal quicker and {"\n"} 
                    faster with savings and {"\n"}
                    investment with kwikee
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>

        <View>
          <View style={styles.activityHeader}>
            <View style={styles.activityText}>
              <FontAwesome 
                name="send" 
                size={20} 
                color="#427ddb" 
              />
              <Text style={{marginHorizontal: 10}}>ACTIVITY</Text>
            </View>
            <View>
              <Entypo 
                name="calendar" 
                size={24} 
                color="#427ddb" 
              />
            </View>
          </View>
          <View style={styles.activityItem}>
            <View>
              <Feather 
                name="target" 
                size={20} 
                color="#427ddb" 
              />
            </View>
            <View>
              <Text style={{fontWeight: 'bold'}}>Goals Savings KS2277991</Text>
              <Text>
                description, 12 Oct 2021.
              </Text>
            </View>
            <View>
              <Text style={{color: "#427ddb"}}>N 15,000</Text>
            </View>
          </View>
          <View style={styles.activityItem}>
            <View>
              <FontAwesome 
              name="arrow-circle-down"  
                size={20} 
                color="#427ddb" 
              />
            </View>
            <View>
              <Text style={{fontWeight: 'bold'}}>Goals Savings KS2277991</Text>
              <Text>
                description, 12 Oct 2021.
              </Text>
            </View>
            <View>
              <Text style={{color: "#427ddb"}}>N 15,000</Text>
            </View>
          </View>
          <View style={styles.activityItem}>
            <View>
              <Feather 
                name="target" 
                size={20} 
                color="#427ddb" 
              />
            </View>
            <View>
              <Text style={{fontWeight: 'bold'}}>Goals Savings KS2277991</Text>
              <Text>
                description, 12 Oct 2021.
              </Text>
            </View>
            <View>
              <Text style={{color: "#427ddb"}}>N 15,000</Text>
            </View>
          </View>
          <View style={styles.activityItem}>
            <View>
              <FontAwesome 
              name="arrow-circle-up" 
              size={20} 
              color="red" />
            </View>
            <View>
              <Text style={{fontWeight: 'bold'}}>Goals Savings KS2277991</Text>
              <Text>
                description, 12 Oct 2021.
              </Text>
            </View>
            <View>
              <Text style={{color: "red"}}>N 15,000</Text>
            </View>
          </View>
          
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        width: '90%',
        marginTop: 50,
      },
      homeHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      homeContainerName: {
        flex: 3,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#427ddb',
      },
      homeContainerNameBar: {
        justifyContent: 'space-between',
        alignItems: 'stretch',
        flexDirection: 'row',
        width: 50,
        height: 6,
        backgroundColor: '#fff',
        borderRadius: 50,
      },
      homeContainerNameBar1: {
        flex: 2,
        backgroundColor: '#427ddb',
        marginRight: 9,
        borderRadius: 12,
      },
      homeContainerNameBar2: {
        flex: 1,
        backgroundColor: '#427ddb',
        borderRadius: 12,
      },
      homeContainerNotification: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        padding: 12,
      },
      cardBalance: {
        marginTop: 20,
        paddingTop: 50,
        paddingLeft: 20,
        paddingBottom: 20,
        borderRadius: 10,
      },
      cardBalanceText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'medium'
      },
      cardBalancePrice: {
        color: '#fff',
        fontSize: 35,
      },
      cardBalanceArrow: {
        position: 'absolute',
        top: 10,
        right: 20,
      },
      cardGoal:{
        backgroundColor: '#ebe6e6',
        padding: 25,
        borderRadius: 12,
        marginTop: 20,
        marginRight: 10
      },
      cardCredit: {
        backgroundColor: '#ebe6e6',
        marginTop: 20,
        borderRadius: 12,
        padding: 9
      },
      cardGoalTarget: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12
      },
      cardGoalTargetText: {
        marginLeft: 10,
        fontWeight: 'medium'
      },
      cardGoalBar: {
        backgroundColor: 'gray',
        width: '100%',
        height: 6,
        borderRadius: 12,
        marginBottom: 5
      },
      cardGoalPrice: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 5
      },
      cardListContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      cardCreditBill: {
        marginTop: 20,
        marginLeft: 10
      },
      activityHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
      },
      activityText: {
        flexDirection: 'row',
        alignItems: 'center'
      },
      activityItem: {
        backgroundColor: '#ebe6e6',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 9
      }
})

export default HomeScreen
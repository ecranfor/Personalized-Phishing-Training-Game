/**
 * # Player type implementation of the game stages
 * Copyright(c) 2022 Edward Cranford <cranford@cmu.edu>
 * MIT Licensed
 *
 * Each client type must extend / implement the stages defined in `game.stages`.
 * Upon connection each client is assigned a client type and it is automatically
 * setup with it.
 *
 * http://www.nodegame.org
 * ---
 */

"use strict";

module.exports = function(treatmentName, settings, stager, setup, gameRoom) {

    stager.setOnInit(function() {

        // Initialize the client.

        var header;

        // Setup page: header + frame.
        
        header = W.generateHeader();
        W.generateFrame();

        // Add widgets for header.
        this.visualStage = node.widgets.append('VisualStage', header, {rounds: false, addRound: false});
        this.visualRound = node.widgets.append('VisualRound', header, {texts: {
            round: 'Trial',
            step: 'Step',
            stage: 'Stage',
            roundLeft: 'Trials Left',
            stepLeft: 'Steps Left',
            stageLeft: 'Stages Left'
        }});
        this.visualTimer = node.widgets.append('VisualTimer', header);
        this.doneButton = node.widgets.append('DoneButton', header);

        // Additional debug information while developing the game.
        // this.debugInfo = node.widgets.append('DebugInfo', header)
    });
/*
    stager.extendStep('terms and conditions', {
        frame: 'pre-consent.htm',        
        cb: function() {
            //nothing here yet, not sure what is needed
        },

        // Make a widget step for preconsent.
        widget: {
            name: 'ChoiceManager',
            id: 'precons',
            options: {
                mainText: 'Before continuing, please verify that the following items are true.<br>' +
                          'If any are not, please return the HIT now.<br>' +
                          'After answering, press the "DONE" button to proceeed.',
                forms: [
                    {
                        name: 'ChoiceTable',
                        id: 'pc1',
                        mainText: '1. I have not attempted to participate more than one time in this study and I am aware that participating more than one time will result in a rejection.',
                        choices: ['True'],
                        requiredChoice: true
                    },
                    {
                        name: 'ChoiceTable',
                        id: 'pc2',
                        mainText: '2. I am not using a private/incognito window when participating and I am aware that doing so will result in rejection.',
                        choices: ['True'],
                        requiredChoice: true
                    },
                    {
                        name: 'ChoiceTable',
                        id: 'pc3',
                        mainText: '3. I will complete the study promptly without any excessive delays and I am aware that failing to do so may result my payment being invalidated.',
                        choices: ['True'],
                        requiredChoice: true
                    }
                ],
                formsOptions: {
                    requiredChoice: true
                }
            }
        }
    });

    stager.extendStep('consent form', {
        frame: 'consent.htm',
        init: function() {
            node.game.doneButton.hide();
        },

        cb: function() {
            //nothing here yet, not sure what is needed
        },

        // Make a widget step for displaying consent form.
        widget: {
            name: 'Consent',
            id: 'consent',
        },
        
        exit: function() {
            node.game.doneButton.show();
        }
    });

    stager.extendStep('demographics', {
        frame: 'demographics.htm',        
        cb: function() {
            //nothing here yet, not sure what is needed
        },

        // Make a widget step for demographics questionnaire.
        widget: {
            name: 'ChoiceManager',
            id: 'demographics',
            options: {
                mainText: 'After answering the following questions, press the "DONE" button to proceeed.',
                forms: [
                    {
                        name: 'ChoiceTable',
                        id: 'demo1-sex',
                        orientation: 'V',
                        mainText: '1. Please specify your sex:',
                        choices: ['Male','Female','Do not wish to specify'],
                        requiredChoice: true
                    },
                    {
                        name: 'CustomInput',
                        id: 'demo2-age',
                        mainText: '2. What is your age?',
                        type: 'int',
                        min: 0,
                        max: 120,
                        requiredChoice: true
                    },
                    {
                        name: 'ChoiceTable',
                        id: 'demo3-edu',
                        orientation: 'V',
                        mainText: '3. What is the highest level of education that you have completed?',
                        choices: ['Some high school','High school','Some college',"Bachelor's degree","Master's degree",'Professional or doctoral degree'],
                        requiredChoice: true
                    }
                ],
                formsOptions: {
                    requiredChoice: true
                }
            }
        }
    });

    stager.extendStep('quick survey', {
        frame: 'survey.htm',        
        cb: function() {
            //nothing here yet, not sure what is needed
        },

        // Make a widget step for quick-version of experience survey.
        widget: {
            name: 'ChoiceManager',
            id: 'qsurvey',
            options: {
                mainText: 'After answering the following questions, press the "DONE" button to proceeed.',
                forms: [
                    {
                        name: 'ChoiceTable',
                        id: 'qsurvey1',
                        orientation: 'V',
                        mainText: '1. What is Phishing? (Select the most accurate description)',
                        choices: ['Pretending to be someone or a company to steal information or money',
                                  'Making a fake website that looks legitimate to steal information or money',
                                  'Sending spam or advertisement emails',
                                  'Tracking internet habits to send advertisements',
                                  'Hacking someone???s computer by trying different passwords',
                                  'Do not know'],
                        requiredChoice: true
                    },
                    {
                        name: 'ChoiceTable',
                        id: 'qsurvey2',
                        orientation: 'V',
                        mainText: '2. By your estimate, what is the possible number of phishing emails you may have received in the last four months?',
                        choices: ['None',
                                  '1 to 2 phishing emails',
                                  '3 to 5 phishing emails',
                                  '5 to 10 phishing emails',
                                  'More than 10 phishing emails'],
                        requiredChoice: true
                    },
                    {
                        name: 'ChoiceTable',
                        id: 'qsurvey3',
                        orientation: 'V',
                        mainText: '3. Did you receive training on phishing attacks in the recent past?',
                        choices: ['No',
                                  'Yes, I have undergone internet security awareness training',
                                  'I have read written educational material about phishing attacks and threats on the internet',
                                  'I was phished by my company as part of a training campaign and received feedback on how to detect phishing emails',
                                  'I have undergone formal computer security training or education'],
                        selectMultiple: true,
                        requiredChoice: true
                    }
                ],
                formsOptions: {
                    requiredChoice: true
                }
            }
        }
    });

    stager.extendStep('instructions', {
        frame: 'instructions.htm',
        cb: function() {
            //nothing here yet, not sure what is needed
        }
    });

    stager.extendStep('instruction quiz', {
        cb: function() {
            // Modify CSS rules on the fly.
            W.cssRule('.choicetable-left, .choicetable-right ' +
                      '{ width: 200px !important; }');

            W.cssRule('table.choicetable td { text-align: left !important; ' +
                      'font-weight: normal; padding-left: 10px; }');
        },

        // Make a widget step for the instruction quiz.
        widget: {
            name: 'ChoiceManager',
            id: 'instquiz',
            options: {
                mainText: 'Answer the following questions to check ' +
                          'your understanding of the game.',
                forms: [
                    {
                        name: 'ChoiceTable',
                        id: 'instquiz1',
                        orientation: 'V',
                        mainText: '1. What is the difference between Phase 2 and Phase 3?',
                        choices: ['Feedback will be given only in Phase 3',
                                  'Feedback will be given only in Phase 2',
                                  'No feedback will be provided in Phase 2 and Phase 3'
                                ],
                        correctChoice: '1'
                    },
                    {
                        name: 'ChoiceTable',
                        id: 'instquiz2',
                        orientation: 'V',
                        mainText: '2. How many points will you earn for correctly classifying an email?',
                        choices: ['One',
                                  'Two',
                                  'Three'
                                ],
                        correctChoice: '0'
                    },
                    {
                        name: 'ChoiceTable',
                        id: 'instquiz3',
                        orientation: 'V',
                        mainText: '3. What is your goal in the task?',
                        choices: ['To correctly classify phishing emails',
                                  'To be confident in your answer',
                                  'To answer as quickly as possible'
                                ],
                        correctChoice: '0'
                    },
                    {
                        name: 'ChoiceTable',
                        id: 'instquiz4',
                        orientation: 'V',
                        mainText: '4. There will be several attention checks in the experiment. If you fail in two attentions checks what will happen?',
                        choices: ['I will continue the experiment',
                                  'I will not be able to proceed with the experiment but will receive base payment and performance bonus',
                                  'I will not be able to proceed with the experiment and will receive only base payment'
                                ],
                        correctChoice: '2'
                    }
                ]
            }
        }
    });

    stager.extendStep('practice instructions', {
        frame: 'practice.htm',
        init: function() {
            node.game.doneButton.hide();
            W.cssRule('table {width: 100%; height: 420px;}');
        },
        cb: function() {
            //W.cssRule('btn {text-align: center; display: inline-block; margin: 0 auto;}');
        },
        widget: {
            name: 'DoneButton',
            id: 'StartButton',
            text: 'Start',
            className: 'btn btn-lg btn-secondary btn-block'
        },
        exit: function() {
            W.hide('pract_inst');
        }
    });

    stager.extendStep('practice trials', {
        frame: 'practice.htm',
        init: function() {
            node.game.visualTimer.hide();
            node.game.doneButton.hide();

        },
        //to get round id 'node.game.getRound()
        cb: function() {
            let explanation;
            let trial = node.game.getRound();
            switch (trial) {
                case 1:
                    explanation = "In this example, Danny uses his Yahoo account for email exchanges. The Yahoo security team sent a code to verify that Danny wants to log into his account at any other location.";
                    break;
                case 2:
                    explanation = "In this example, a user orders food from GrubHub. The Grubhub team usually sends updates and offers to their customers.";
                    break;
                case 3:
                    explanation = "In this example, a user might be a researcher who publishes papers at conferences. The user gets notifications for an international conference requesting papers submissions.";
                    break;
                case 4:
                    explanation = "In this example, a user is an Adidas customer who often shops from Adidas. Thus, the company sends the user a sale notification.";
                    break;
                default:
                    explanation = "Insert Explanation Here";

            }

            W.hide('pract_inst');
            W.show('examples');
            W.cssRule('table {border: 1px solid black; padding: 15px; text-align: left; width: 100%;}');
            W.setInnerHTML('explanation', explanation);
            node.on.data('email', function(msg) {
                W.setInnerHTML('source', msg.data[0].sender);
                W.setInnerHTML('subject', msg.data[0].subject);
                W.setInnerHTML('body', msg.data[0].body);
            });
        },
        // Make a widget for a Next button.
        widget: {
            name: 'DoneButton',
            id: 'NextButton',
            text: 'Next',
            className: 'btn btn-lg btn-secondary btn-block'
        },
        exit: function() {
            node.game.doneButton.show();
        }
    });
*/
    stager.extendStep('start game', {
        frame: 'start-game.htm',
        init: function() {
            node.game.doneButton.hide();
        },
        cb: function() {
            //W.cssRule('btn {text-align: center; display: inline-block; margin: 0 auto;}');
        },
        widget: {
            name: 'DoneButton',
            id: 'StartButton',
            text: 'Start',
            className: 'btn btn-lg btn-secondary btn-block'
        },
        exit: function() {
            node.game.doneButton.show();
        }
    });

    stager.extendStep('phase 1', {
        frame: 'game.htm',
        init: function() {
            node.game.visualTimer.hide();
            //W.setInnerHTML('phase', phase);
            //W.setInnerHTML('trial', trial);
        },
        donebutton: {
            text: 'Next'
        },
        //to get round id 'node.game.getRound()
        cb: function() {

            node.on.data('phasedata', function(msg) {
                W.setInnerHTML('phase', msg.data[0]);
                W.setInnerHTML('trial', msg.data[1]);
            });
            W.cssRule('#container {max-width: 54em;}');
            W.cssRule('table, tr, td {border: 2px solid black;}');
            W.cssRule('table {width: 100%;}');
            W.cssRule('.panel {border: none;box-shadow: none;}');
            W.cssRule('.panel-body {padding: 0px;}');
            W.cssRule('table.choicetable {border: none;width: 50%;}');
            W.cssRule('.choicetable tr td {background: lightgray}');
            W.cssRule('.container-slider {height: 25px}');
            W.cssRule('.volume-slider::-moz-range-thumb {height: 25px; width: 25px; background: gray}');
            W.cssRule('.volume-slider::-moz-range-track {border: 1px solid gray}');
            node.on.data('email', function(msg) {
                W.setInnerHTML('source', msg.data[0].sender);
                W.setInnerHTML('subject', msg.data[0].subject);
                W.setInnerHTML('body', msg.data[0].body);
                //email_id = msg.data[0].id;
                //email_type = msg.data[0].type;
                //node.set({'email-id': id}); //this is saving data to a new json object instead of the final one.
            });
            //set the step attribute to 5 so that the slider is easier to set...may revert to continuous values
            W.getElementsByClassName('volume-slider')[0].setAttribute('step', '5');
        },

        // Make a widget step for the classification questions.
        widget: {
            name: 'ChoiceManager', 
            root: 'classify',
            id: 'decision',
            options: {
                mainText: 'Answer the following questions:',
                forms: [
                    {
                        name: 'ChoiceTable',
                        id: 'classification',
                        orientation: 'H',
                        mainText: '1. Is this a phishing email?',
                        choices: ['Yes',
                                  'No'
                                ],
                        requiredChoice: true
                    },
                    {
                        name: 'Slider',
                        id: 'confidence',
                        mainText: '2. How confident are you in your answer for question 1?',
                        texts: {
                            currentValue: function(widget, value) {
                                return '<datalist id="tickmarks" style="font-size: 14px"><option value="50" label="50"></option><option value="100" label="100"></option></datalist><datalist id="tickmarks" style="font-size: 12px"><option value="50" label="Not Confident at All"></option><option value="100" label="Fully Confident"></option></datalist>Confidence Level: ' + value;
                            }},
                        min: 50,
                        max: 100,
                        step: 5, //this doesn't actually do anything, instead it is created in the cb function
                        initialValue: 50,
                        displayNoChange: false,
                        required: true
                    }
                ]
            }
        }
    });

    ///TEMPLATE STAGES BELOW HERE --- NEED TO MODIFY STILL
    stager.extendStep('training', {
        frame: 'game.htm',
        roles: {
            DICTATOR: {
                timer: settings.bidTime,
                cb: function() {
                    var div;

                    // Make the dictator display visible and returns it.
                    div = W.show('dictator');

                    // Add widget to validate numeric input.
                    node.game.bid = node.widgets.append('CustomInput', div, {
                        type: 'int',
                        min: 0,
                        max: node.game.settings.COINS,
                        requiredChoice: true,
                        mainText: 'Make an offer between 0 and ' +
                            node.game.settings.COINS + ' to another player'
                    });
                },
                done: function() {
                    return { offer: node.game.bid.getValues().value };
                },
                timeup: function() {
                    node.game.bid.setValues();
                    node.done();
                }
            },
            OBSERVER: {
                donebutton: false,
                cb: function() {
                    var dotsObj;

                    // Make the observer display visible.
                    W.show('observer');

                    dotsObj = W.addLoadingDots(W.gid('dots'));

                    node.on.data('decision', function(msg) {
                        node.game.doneButton.enable();
                        dotsObj.stop();
                        W.setInnerHTML('waitingFor', 'Decision arrived: ');
                        W.setInnerHTML('decision',
                                       'The dictator offered: ' +
                                       msg.data + ' ECU.');

                        // Leave the decision visible for up 5 seconds.
                        // If user clicks Done, it can advance faster.
                        node.timer.wait(5000).done();
                    });
                }
            }
        }
    });

    stager.extendStep('end', {
        widget: 'EndScreen',
        init: function() {
            node.game.doneButton.destroy();
            node.game.visualTimer.destroy();
        }
    });
};

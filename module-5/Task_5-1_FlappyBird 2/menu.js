"use strict";
import { TSprite, TSpriteButton, TSpriteNumber} from "libSprite";
import { startGame, EGameStatus } from "./FlappyBird.mjs";
import { TSoundFile } from "libSound";
import { EAudioStateType } from "libSound";

const fnCountDown = "./Media/countDown.mp3";
const fnRunning = "./Media/running.mp3";

export class TMenu{
  #spTitle;
  #spPlayBtn;
  #spCountDown;
  #sfCountDown;
  #sfRunning;
  #spGameScore;
  #spGetReady;
  #spGameOver;
  #spMedal;
  #spFinalScore;
  #spHighScore;
  constructor(aSpcvs, aSPI){
    this.#spTitle = new TSprite(aSpcvs, aSPI.flappyBird, 200, 100);
    this.#spPlayBtn = new TSpriteButton(aSpcvs, aSPI.buttonPlay, 240, 180);
    this.#spPlayBtn.addEventListener("click", this.spPlayBtnClick.bind(this));
    this.#spCountDown = new TSpriteNumber(aSpcvs, aSPI.numberBig, 280, 190);
    this.#spCountDown.visible = false;
    this.#sfCountDown = null;
    this.#sfRunning = null;
    this.#spGameScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 10, 10);
    this.#spGameScore.alpha = 0.5;
    this.#spGetReady = new TSprite(aSpcvs, aSPI.infoText, 200, 100);
    this.#spGetReady.index = 0;
    this.#spGetReady.hidden = true;
    this.#spGameOver = new TSprite(aSpcvs, aSPI.gameOver, 175, 230); // <-- note x position
    this.#spGameOver.hidden = true;
    this.#spMedal = new TSprite(aSpcvs, aSPI.medal, 150, 190); // <-- note position for medal on top of billboard
    this.#spMedal.hidden = true;
    this.#spFinalScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 210, 270); // <-- note final score position
    this.#spFinalScore.hidden = false;
    this.#spHighScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 210, 290); // <-- note high score position
    this.#spHighScore.hidden = false;
  }

  incGameScore(aScore){
    this.#spGameScore.value += aScore;
  }

  getScore(){
    return this.#spGameScore.value;
  }

  getHighScore(){
    // TODO: Implement high score tracking (localStorage or similar)
    return this.#spGameScore.value; // For now, return current score as high score
  }

  showGameOver(finalScore, highScore){
    this.#spFinalScore.value = finalScore;
    this.#spHighScore.value = highScore;
    this.#spGameOver.hidden = false;
    this.#spMedal.hidden = false;
    this.#spFinalScore.hidden = true;
    this.#spHighScore.hidden = true;
  }

  stopSound(){
    this.#sfRunning.stop();
  }

  setSoundMute(aIsMuted){
    if(aIsMuted){
      if(this.#sfRunning) this.#sfRunning.pause();
    }else{
      if(this.#sfRunning && this.#sfRunning.audioState === EAudioStateType.Paused){
        this.#sfRunning.play();
      }
    }
  }

  draw(){
    this.#spTitle.draw();
    this.#spPlayBtn.draw();
    this.#spGetReady.draw();
    this.#spCountDown.draw();
    this.#spGameScore.draw();
    this.#spGameOver.draw();
    this.#spMedal.draw();
    this.#spFinalScore.draw();
    this.#spHighScore.draw();
  }

  countDown(){
    this.#spCountDown.value--;
    if(this.#spCountDown.value > 0){
      setTimeout(this.countDown.bind(this), 1000);  
    }else{
      this.#spCountDown.visible = false;
      this.#spGetReady.hidden = true;
      this.#sfRunning = new TSoundFile(fnRunning);
      this.#sfRunning.play();
      startGame();
    }
    
  }

spPlayBtnClick(){
  EGameStatus.state = EGameStatus.countDown;
  this.#spTitle.hidden = true;
  this.#spGetReady.hidden = false;
  this.#spPlayBtn.hidden = true;
  this.#spCountDown.visible = true;
  this.#spCountDown.value = 3;
  this.#sfCountDown = new TSoundFile(fnCountDown);
  this.#sfCountDown.play();
  setTimeout(this.countDown.bind(this), 1000);
}
}
/**
 * Blockly Lua: ComputerCraft Turtle API
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Blocks for ComputerCraft Turtle API
 * @author Edgar (AnotherFoxGuy)
 */

/* global Blockly*/

goog.provide('Blockly.Blocks.Turtle');

goog.require('Blockly.Blocks');

Blockly.Blocks['turtle_movement'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("turtle move")
      .appendField(new Blockly.FieldDropdown([
        ["forward", "forward"],
        ["backward", "back"],
        ["up", "up"],
        ["down", "down"]
      ]), "dir");
    this.setOutput(true, "Boolean");
    this.setColour(120);
    this.setTooltip('Try to move the turtle');
    this.setHelpUrl('http://www.computercraft.info/wiki/Turtle_(API)');
  }
};

Blockly.Blocks['turtle_dig'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("turtle dig")
      .appendField(new Blockly.FieldDropdown([
        ["forward", "dig"],
        ["up", "digUp"],
        ["down", "digDown"]
      ]), "dig");
    this.setOutput(true, "Boolean");
    this.setColour(120);
    this.setTooltip('Breaks the block. With hoe: tills the dirt.');
    this.setHelpUrl('http://www.computercraft.info/wiki/Turtle_(API)');
  }
};

Blockly.Blocks['turtle_place'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("turtle place")
      .appendField(new Blockly.FieldDropdown([
        ["forward", "place"],
        ["up", "placeUp"],
        ["down", "placeDown"]
      ]), "place");
    this.setOutput(true, "Boolean");
    this.setColour(120);
    this.setTooltip('Places a block of the selected slot in front. Collects water or lava if the currently selected slot is an empty bucket.');
    this.setHelpUrl('http://www.computercraft.info/wiki/Turtle_(API)');
  }
};

Blockly.Blocks['turtle_detect'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("turtle detect")
      .appendField(new Blockly.FieldDropdown([
        ["forward", "detect"],
        ["up", "detectUp"],
        ["down", "detectDown"]
      ]), "detect");
    this.setOutput(true, "Boolean");
    this.setColour(120);
    this.setTooltip('Detects if there is a block. Does not detect mobs.');
    this.setHelpUrl('http://www.computercraft.info/wiki/Turtle_(API)');
  }
};
/* Generated by Opal 1.0.3 */
(function(Opal) {
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  function $rb_gt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs > rhs : lhs['$>'](rhs);
  }
  function $rb_times(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs * rhs : lhs['$*'](rhs);
  }
  function $rb_ge(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs >= rhs : lhs['$>='](rhs);
  }
  function $rb_lt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs < rhs : lhs['$<'](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $$$ = Opal.const_get_qualified, $$ = Opal.const_get_relative, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $truthy = Opal.truthy, $send = Opal.send;

  Opal.add_stubs(['$setPrefixes', '$match', '$upcase', '$to_i', '$[]', '$!', '$nil?', '$getValue', '$checkRoll', '$roll', '$+', '$getValueText', '$==', '$collect', '$split', '$count', '$>', '$*', '$>=', '$to_s', '$parren_killer', '$<']);
  return (function($base, $super, $parent_nesting) {
    var self = $klass($base, $super, 'DarkSouls');

    var $nesting = [self].concat($parent_nesting), $DarkSouls_rollDiceCommand$1, $DarkSouls_checkRoll$2, $DarkSouls_getValue$5, $DarkSouls_getValueText$6;

    
    Opal.const_set($nesting[0], 'ID', "DarkSouls");
    Opal.const_set($nesting[0], 'NAME', "ダークソウルTRPG");
    Opal.const_set($nesting[0], 'SORT_KEY', "たあくそうるTRPG");
    Opal.const_set($nesting[0], 'HELP_MESSAGE', "" + "・行為判定：[n]DS[a±b][@t]　　[]内のコマンドは省略可\n" + "・能動判定：[n]ADS[a±b][@t]　　FP消費を判定\n" + "　n：ダイス数。省略時は「2」\n" + "　a±b：修正値。「1+2-1」のように、複数定可\n" + "　@t：目標値。省略時は達成値を、指定時は判定の正否を表示\n" + "例）DS → 2D6の達成値を表示\n" + "　　1DS → 1D6の達成値を表示\n" + "　　ADS+2-2 → 2D6+2の達成値を表示（能動判定）\n" + "　　DS+2@10 → 2D6+2で目標値10の判定\n");
    self.$setPrefixes(["(\\d+)?(A)?DS([-+\\d]*)(@\\d+)?"]);
    
    Opal.def(self, '$rollDiceCommand', $DarkSouls_rollDiceCommand$1 = function $$rollDiceCommand(command) {
      var $a, self = this, m = nil, diceCount = nil, isActive = nil, modify = nil, target = nil, output = nil;

      
      if ($truthy((m = /(\d+)?(A)?DS([-+\d]*)(@(\d+))?$/i.$match(command.$upcase())))) {
      } else {
        return nil
      };
      diceCount = ($truthy($a = m['$[]'](1)) ? $a : 2).$to_i();
      isActive = m['$[]'](2)['$nil?']()['$!']();
      modify = self.$getValue(m['$[]'](3));
      target = ($truthy($a = m['$[]'](5)) ? $a : 0).$to_i();
      output = self.$checkRoll(diceCount, isActive, modify, target);
      return output;
    }, $DarkSouls_rollDiceCommand$1.$$arity = 1);
    
    Opal.def(self, '$checkRoll', $DarkSouls_checkRoll$2 = function $$checkRoll(diceCount, isActive, modify, target) {
      var $a, $b, $$3, $$4, self = this, dice = nil, diceText = nil, successValue = nil, modifyText = nil, targetText = nil, diceArray = nil, focusDamage = nil, focusText = nil, result = nil;

      
      $b = self.$roll(diceCount, 6), $a = Opal.to_ary($b), (dice = ($a[0] == null ? nil : $a[0])), (diceText = ($a[1] == null ? nil : $a[1])), $b;
      successValue = $rb_plus(dice, modify);
      modifyText = self.$getValueText(modify);
      targetText = (function() {if (target['$=='](0)) {
        return ""
      } else {
        return "" + ">=" + (target)
      }; return nil; })();
      if ($truthy(isActive)) {
        
        diceArray = $send(diceText.$split(/,/), 'collect', [], ($$3 = function(i){var self = $$3.$$s || this;

        
          
          if (i == null) {
            i = nil;
          };
          return i.$to_i();}, $$3.$$s = self, $$3.$$arity = 1, $$3));
        focusDamage = $send(diceArray, 'count', [], ($$4 = function(i){var self = $$4.$$s || this;

        
          
          if (i == null) {
            i = nil;
          };
          return i['$=='](1);}, $$4.$$s = self, $$4.$$arity = 1, $$4));
        if ($truthy($rb_gt(focusDamage, 0))) {
          
          focusText = $rb_times("■", focusDamage);
          focusText = "" + "（FP" + (focusText) + "消費）";};};
      result = "" + "(" + (diceCount) + "D6" + (modifyText) + (targetText) + ")";
      result = $rb_plus(result, "" + " ＞ " + (dice) + "(" + (diceText) + ")" + (modifyText));
      result = $rb_plus(result, "" + " ＞ " + (successValue) + (targetText));
      if ($truthy($rb_gt(target, 0))) {
        if ($truthy($rb_ge(successValue, target))) {
          result = $rb_plus(result, " ＞ 【成功】")
        } else {
          result = $rb_plus(result, " ＞ 【失敗】")
        }};
      result = $rb_plus(result, focusText.$to_s());
      return result;
    }, $DarkSouls_checkRoll$2.$$arity = 4);
    
    Opal.def(self, '$getValue', $DarkSouls_getValue$5 = function $$getValue(text) {
      var $a, self = this;

      
      text = ($truthy($a = text) ? $a : "");
      return self.$parren_killer("" + "(0" + (text) + ")").$to_i();
    }, $DarkSouls_getValue$5.$$arity = 1);
    return (Opal.def(self, '$getValueText', $DarkSouls_getValueText$6 = function $$getValueText(value) {
      var self = this;

      
      if (value['$=='](0)) {
        return ""};
      if ($truthy($rb_lt(value, 0))) {
        return value.$to_s()};
      return "" + "+" + (value);
    }, $DarkSouls_getValueText$6.$$arity = 1), nil) && 'getValueText';
  })($nesting[0], $$($nesting, 'DiceBot'), $nesting)
})(Opal);

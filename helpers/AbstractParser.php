<?php
/**
 * Created by PhpStorm.
 * User: Dante
 * Date: 24.02.2019
 * Time: 14:32
 */

class AbstractParser
{
    const START_SYMBOL = '~';
    const LEVEL_SYMBOL = '[';
    const END_SYMBOL = ']';

    protected $nodes;

    public function getStructure($string)
    {
        static $i = 0;
        static $id = 1;
        static $lastLevel = 1;
        $currentChar = $string[$i];
        while ($currentChar) {
            if ($currentChar === self::START_SYMBOL) {
                $currentNode = array();
                $currentLevel = 0;
                $currentLineStart = $i;
                $currentChar = $string[++$i];
                while ($currentChar === "[") {
                    $currentChar = $string[++$i];
                    $currentLevel++;
                }
                $currentNode['depth'] = $currentLevel;
                $content = '';
                while ($currentChar !== self::START_SYMBOL) {
                    if($currentChar !== self::END_SYMBOL) {
                        $content .= $currentChar;
                    }
                    $currentChar = $string[++$i];
                }
                $currentNode['name'] = $content;
                $currentNode['id'] = $id++;
                $currentNode['line'] = $currentLineStart;
                if (!$this->nodes) {
                    $this->nodes = array();
                    array_push($this->nodes, $currentNode);
                } else if ($lastLevel < $currentLevel) {
                    $parent = $this->findClosestParent($currentLevel + 1);
                    if (!isset($parent['children'])) {
                        $parent['children'] = array();
                    }
                    array_push($parent['children'], $currentNode);
                    $this->updateNode($parent);
                } else {
                    $parent = $this->findClosestParent($currentLevel);
                    /* root node */
                    if(!isset($parent['id'])) {
                        array_push($parent, $currentNode);
                    } else {
                        array_push($parent['children'], $currentNode);
                    }
                    $this->updateNode($parent);
                }
                $lastLevel = $currentLevel;
            }
            if(isset($string[++$i]))
                $currentChar = $string[$i];
            else
                break;
        }

        return $this->nodes;
    }

    protected function findClosestParent($level)
    {
        $currentParent = &$this->nodes;
        if($level !== 1) {
            $currentParent = &$this->nodes[count($this->nodes) - 1];
            while (isset($currentParent['children']) && $currentParent['depth'] !== $level - 1) {
                /* смотрим только левую часть графа */
                $currentParent = &$currentParent['children'][count($currentParent['children']) - 1];
                if(!isset($currentParent['children'])) {
                    break;
                }
            }
        }
        return $currentParent;
    }

    protected function updateNode($node) {
        /* rootNode */
        if(!isset($node['id'])) {
            $this->nodes = $node;
        } else {
            $currentNode = &$this->nodes[count($this->nodes) - 1];
            while ($currentNode['id'] !== $node['id']) {
                $currentNode = &$currentNode['children'][count($currentNode['children']) - 1];
            }
            $currentNode = $node;
        }
    }
}
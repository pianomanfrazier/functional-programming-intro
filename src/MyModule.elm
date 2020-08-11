module MyModule exposing (..)


type Animal
    = Cow
    | Dog
    | Cat


animalSpeak : Animal -> String
animalSpeak animal =
    case animal of
        Cow ->
            "Moo"

        Dog ->
            "Bow wow"

        Cat ->
            "Meow"


add : Int -> Int -> Int
add a b =
    a + b


add2 : Int -> Int
add2 =
    add 2


mySum : List Int -> Int
mySum nums =
    case nums of
        [] ->
            0

        head :: rest ->
            head + mySum rest


-- genericSum : (number -> number -> number) -> number -> List number -> number
-- genericSum operator identity list =
--     case list of
--         [] ->
--             identity

--         head :: rest ->
--             operator head (genericSum operator identity rest)

genericSum : (number -> number -> number) -> number -> List number -> number
genericSum operator identity list =
    let
        newFunction : List number -> number
        newFunction nums = 
            case nums of
                [] ->
                    identity

                head :: rest ->
                    operator head (newFunction rest)
    in
    newFunction list
